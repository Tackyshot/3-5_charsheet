"use strict";

module.exports = function(sequelize, DataTypes) {
    var Spell = sequelize.define("Spell", {
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
            spellName: {
                type: DataTypes.STRING,
                defaultValue: "Spell Name",
                validate:{
                    isAlphanumeric: true
                }
            },
            spellLevel: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate:{
                    isInt: true
                }
            },
            spellNotes: {
                type: DataTypes.TEXT
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Spell.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                    Spell.hasMany(models.PreparedSpell);

                }
            }
        });

    return Spell;
};