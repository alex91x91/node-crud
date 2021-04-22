import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const SpecialityDiscipline = sequelize.define('SpecialityDiscipline', {
  begin_date: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_date: {
    type: DataTypes.TIME,
    allowNull: false
  }
});
