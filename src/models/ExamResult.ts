import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const ExamResult = sequelize.define('ExamResult', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.TIME,
    allowNull: false
  }
});
