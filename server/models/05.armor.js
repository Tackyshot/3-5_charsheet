"use strict";

module.exports = function(sequelize, DataTypes) {
    var Armor = sequelize.define("Armor", {
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
            armrName: {
                type: DataTypes.STRING,
                defaultValue: "Armor Name"
            },
            armrType: {
                type: DataTypes.STRING,
                defaultValue: "Type"
            },
            armrACBonus: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            armrMaxDex: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            armrCheckPen: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            armrSpellFail: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            armrSpeed:{
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            armrWeight: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            armrEquipped: {
                type: DataTypes.BOOLEAN,
                defaultValue: 0,
                validate: {
                    isInt: true,
                    isIn: [[1, 0]]
                }
            },
            armrNotes: {
                type: DataTypes.TEXT
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Armor.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                    Armor.belongsTo(models.Location, {
                        onDelete: "RESTRICT",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Armor;
};