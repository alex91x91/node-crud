// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     index: { unique: true },
//     lowercase: true,
//     trim: true,
//   },
//   password: { type: String, required: true, trim: true },
// });

// module.exports = mongoose.model('User', UserSchema);

import { DataTypes } from 'sequelize';
import { sequelize } from '../services/sequelize';

export const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
