'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ApiKey extends Model {
    static associate(models) {
      // Relasi: Satu ApiKey dimiliki oleh satu User
      ApiKey.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  ApiKey.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    key: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'revoked', 'expired'),
      allowNull: false,
      defaultValue: 'active',
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users', // Nama tabel 'users'
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
  });
  return ApiKey;
};