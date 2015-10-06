"use strict";

module.exports = function(sequelize, DataTypes) {
    var Combat = sequelize.define("Combat", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            charId: {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Character,
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            combatType: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    isIn: [["Melee", "Range", "Grapple"]]
                }
            },
            miscMod: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate:{
                    isInt: true
                }
            },
            tempMod: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Combat.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Combat;
};