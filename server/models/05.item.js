"use strict";

module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define("Weapon", {
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
            locId: {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Location,
                    key: "id"
                },
                onDelete: "RESTRICT"
            },
            itemName: {
                type: DataTypes.STRING,
                defaultValue: "Item Name"
            },
            itemWeight: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            itemQty: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            itemOrder: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            itemColor: {
                type: DataTypes.STRING,
                defaultValue: "white"
            },
            itemNotes: {
                type: DataTypes.TEXT
            }

        },
        {
            classMethods: {
                associate: function (models) {
                    Weapon.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                    Weapon.belongsTo(models.Location, {
                        onDelete: "RESTRICT",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Weapon;
};