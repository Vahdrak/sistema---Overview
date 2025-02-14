import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME || 'inventory_db';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASS = process.env.DB_PASS || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
});

export async function syncDB() {
  try {
    await sequelize.sync({ force: true });
    console.log('PostgreSQL DB synced successfully.');
  } catch (error) {
    console.error('Error syncing PostgreSQL DB:', error);
  }
}