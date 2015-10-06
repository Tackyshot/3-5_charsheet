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
            wpnName: {
                type: DataTypes.STRING,
                defaultValue: "Weapon Name"
            },
            wpnDamage: {
                type: DataTypes.STRING,
                defaultValue: "Damage"
            },
            wpnCrit: {
                type: DataTypes.STRING,
                defaultValue: "Critical"
            },
            wpnAtkBonus: {
                type: DataTypes.STRING,
                defaultValue: "Attack Bonus"
            },
            wpnRangeInc: {
                type: DataTypes.STRING,
                defaultValue: "Range Inc"
            },
            wpnWeight: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            wpnNotes: {
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