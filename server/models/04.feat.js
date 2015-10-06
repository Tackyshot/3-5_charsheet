"use strict";

module.exports = function(sequelize, DataTypes) {
    var Feat = sequelize.define("Feat", {
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
            featName: {
                type: DataTypes.STRING,
                defaultValue: "Feat Name",
                validate: {
                    isAlphanumeric: true
                }
            },
            featNotes: {
                type: DataTypes.TEXT
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Feat.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Feat;
};