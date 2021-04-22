import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const Discipline = sequelize.define('Discipline', {
  discipline_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  deleted: {
    type: DataTypes.TIME
  }
});
