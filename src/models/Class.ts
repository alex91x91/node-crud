import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const Class = sequelize.define('Class', {
  class_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  begin_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deleted: {
    type: DataTypes.TIME
  }
});
