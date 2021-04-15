import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  host: 'localhost',
  port: 3306,
  database: 'test2',
  dialect: 'mariadb',
  username: 'root',
  password: 'my-secret-pw'
});

export const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync();
    console.info('Successfully connected to MariaDb');
  } catch (error) {
    console.info(`Connection to MariaDb is failed. Error: ${error}`);
    process.exit(1);
  }
};
