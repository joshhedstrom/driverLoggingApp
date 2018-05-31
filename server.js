// Dependencies
// ============================================================
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');

// let exphbs = require("express-handlebars");

// Require models for syncing
const db = require("./models");

// Express
// ============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Passport
// ============================================================
app.use(session({ secret: 'driverLogger',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));



// Handlebars
// ============================================================
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// Routes
// ============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/trips-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

require('./config/passport.js')(passport, db.user);



// Sync with Sequelize and start the server
// ============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on http://localhost:" + PORT);
    })
})
