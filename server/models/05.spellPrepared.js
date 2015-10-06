"use strict";

module.exports = function(sequelize, DataTypes) {
    var SpellPrepared = sequelize.define("SpellPrepared", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            spellId: {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Spell,
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            preparedAt: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
                validate:{
                    isInt: true
                }
            },
            spellUsed: {
                type: DataTypes.BOOLEAN,
                defaultValue: 0,
                validate:{
                    isInt: true,
                    isIn: [[0, 1]]
                }
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    SpellPrepared.belongsTo(models.Spell, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        });

    return SpellPrepared;
};