'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Relasi: Satu User bisa memiliki banyak ApiKey
      User.hasMany(models.ApiKey, {
        foreignKey: 'userId',
        as: 'apiKeys',
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Opsional: tentukan nama tabel
  });
  return User;
};