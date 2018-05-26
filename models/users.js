module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allownull: false
        }
    })
    return Users;
}