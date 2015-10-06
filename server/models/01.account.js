"use strict";

module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
        classMethods: {
            associate: function (models) {
                Account.hasMany(models.Campaign)
            }
        }
    });

    return Account;
};