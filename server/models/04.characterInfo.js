"use strict";

module.exports = function(sequelize, DataTypes) {
    var CharacterInfo = sequelize.define("CharacterInfo", {
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
            charClass: {
                type: DataTypes.STRING,
                defaultValue: "Class",
                validate: {
                    isAlpha: true
                }
            },
            level: {
                type: DataTypes.STRING,
                defaultValue: "0",
                validate: {
                    isAlphanumeric: true
                }
            },
            alignment: {
                type: DataTypes.STRING,
                defaultValue: "TN",
                validate:{
                    isAlpha: true
                }
            },
            race: {
                type: DataTypes.STRING,
                defaultValue: "Race",
                validate: {
                    isAlpha: true
                }
            },
            subRace: {
                type: DataTypes.STRING,
                defaultValue: "Sub-Race",
                validate: {
                    isAlpha: true
                }
            },
            diety: {
                type: DataTypes.STRING,
                defaultValue: "Diety",
                validate: {
                    isAlpha: true
                }
            },
            size: {
                type: DataTypes.STRING,
                defaultValue: "Medium",
                validate: {
                    isAlpha: true
                }
            },
            height: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            weight: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            gender: {
                type: DataTypes.STRING,
                defaultValue: "Gender",
                validate: {
                    isAlpha: true
                }
            },
            xp: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            xpNeeded: {
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
                    CharacterInfo.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return CharacterInfo;
};