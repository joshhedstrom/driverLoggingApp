//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });

    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, username, password, done) {
            const generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {

                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    let userPassword = generateHash(password);
                    console.log("hashed: ", userPassword)
                    let data = {
                        username: username,
                        password: userPassword,
                    };

                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, username, password, done) {
            let User = user;
            const isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {

                if (!user) {
                    console.log('NOT USER')
                    return done(null, false, {
                        message: 'Username does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {
                    console.log('TRIED TO VALIDATE PASSWORD')
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }

                let userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Sign in'
                });
            });
        }
    ));

}