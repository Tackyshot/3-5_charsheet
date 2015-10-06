"use strict";

module.exports = function(sequelize, DataTypes) {
    var Campaign = sequelize.define("Campaign", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            aid: {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Account,
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    Campaign.belongsTo(models.Account, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            defaultNull: false
                        }
                    });
                    Campaign.hasMany(models.Character);
                }
            }
        });

    return Campaign;
};