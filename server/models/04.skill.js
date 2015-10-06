"use strict";

module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define("Skill", {
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
            skillName: {
                type: DataTypes.STRING,
                defaultValue: "Skill Name",
                validate: {
                    isAlphanumeric: true
                }
            },
            bonusName: {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    isAlphanumeric: true
                }
            },
            classSkill:{
                type: DataTypes.BOOLEAN,
                defaultValue: 0,
                validate: {
                    isInt: true,
                    isIn: [[0, 1]]
                }
            },
            skillRank: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            skillMisc1: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            skillMisc2: {
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
                    Skill.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Skill;
};