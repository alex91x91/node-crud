import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const Exam = sequelize.define('Exam', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
