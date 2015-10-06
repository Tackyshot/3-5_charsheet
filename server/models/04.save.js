"use strict";

module.exports = function(sequelize, DataTypes) {
    var Save = sequelize.define("Save", {
            "id": {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            "charId": {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Character,
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            "save-type": {
                type: DataTypes.STRING,
                defaultValue: null,
                validate: {
                    isIn: [["Fortitude", "Will", "Reflex"]]
                }
            },
            "base-save": {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            "magic-mod": {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            "misc-mod": {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: true
                }
            },
            "temp-mod": {
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
                    Save.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                }
            }
        });

    return Save;
};