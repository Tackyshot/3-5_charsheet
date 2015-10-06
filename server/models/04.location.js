"use strict";

module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
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
            locationName: {
                type: DataTypes.STRING,
                defaultValue: "Location Name",
                validate: {
                    isAlphanumeric: true
                }
            },
            maxWeight: {
                type: DataTypes.INTEGER,
                validate:{
                    isInt: true
                }
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Location.belongsTo(models.Character, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });

                    Location.hasMany(models.Armor);
                    Location.hasMany(models.Weapon);
                    Location.hasMany(models.Item);

                }
            }
        });

    return Location;
};