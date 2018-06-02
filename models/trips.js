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
        },
        hours: {
            type: DataTypes.INTEGER,
        },
        wage: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        }
    });
    return Trips;
};