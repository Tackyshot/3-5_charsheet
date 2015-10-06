"use strict";

module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            campId: {
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.models.Campaign,
                    key:"id"
                },
                onDelete: "CASCADE"
            },
            name: {
                type: DataTypes.STRING,
                defaultValue: "Character Name"
            },
            retired: {
                type: DataTypes.BOOLEAN,
                defaultValue: 0,
                validate: {
                    isInt: true,
                    isIn: [[0, 1]]
                }
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Character.belongsTo(models.Campaign, {
                        onDelete: "CASCADE",
                        foreignKey: {
                           defaultNull: false
                        }
                    });

                    Character.hasMany(models.ArmorClass);
                    Character.hasMany(models.BaseAttack);
                    Character.hasOne (models.CharacterInfo);
                    Character.hasMany(models.Combat);
                    Character.hasMany(models.Feat);
                    Character.hasMany(models.Health);
                    Character.hasMany(models.Initiative);
                    Character.hasMany(models.Save);
                    Character.hasMany(models.Skill);
                    Character.hasMany(models.Spell);
                    Character.hasMany(models.Stat);

                    /*Character.hasMany(models.Location);
                    Character.hasMany(models.Armor);
                    Character.hasMany(models.Weapon);
                    Character.hasMany(models.Items);*/

                }
            }
        });

    return Character;
};