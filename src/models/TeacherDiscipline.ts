import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const TeacherDiscipline = sequelize.define('TeacherDiscipline', {
  begin_date: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_date: {
    type: DataTypes.TIME,
    allowNull: false
  }
});
