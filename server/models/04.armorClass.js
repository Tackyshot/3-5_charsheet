"use strict";

module.exports = function(sequelize, DataTypes) {
    var ArmorClass = sequelize.define("ArmorClass", {
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
            naturalArmor: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            misc1Armor: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            misc2Armor: {
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
                    ArmorClass.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return ArmorClass;
};