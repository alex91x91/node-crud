import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  host: 'localhost',
  port: 3306,
  database: 'test2',
  dialect: 'mariadb',
  username: 'root',
  password: 'my-secret-pw'
});
