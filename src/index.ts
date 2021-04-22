import app from './app';
import { connectToMySQL } from './services/sequelize';
import { Class } from './models/Class';
import { Student } from './models/Student';
import { Exam } from './models/Exam';
import { Speciality } from './models/Speciality';
import { Discipline } from './models/Discipline';
import { Teacher } from './models/Teacher';
import { ExamResult } from './models/ExamResult';
import { SpecialityDiscipline } from './models/SpecialityDiscipline';
import { TeacherDiscipline } from './models/TeacherDiscipline';

const start = async () => {
  console.log('Starting up........');

  await connectToMySQL();

  Class.hasMany(Student);
  Student.belongsToMany(Exam, { through: ExamResult });
  Speciality.belongsToMany(Discipline, { through: SpecialityDiscipline });
  Teacher.belongsToMany(Discipline, { through: TeacherDiscipline });

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
