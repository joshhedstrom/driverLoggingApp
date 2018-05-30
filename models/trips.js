module.exports = function(sequelize, DataTypes) {
    let Trips = sequelize.define("Trips", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        miles: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tips: {
            type: DataTypes.INTEGER,
        }
    });
    return Trips;
};