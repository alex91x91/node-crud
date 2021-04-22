import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const Teacher = sequelize.define('Teacher', {
  teacher_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
