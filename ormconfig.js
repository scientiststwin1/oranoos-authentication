require('dotenv').config()

module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    migrations: ['dist/shared/migrations/*.js'],
    cli: {
        migrationsDir: 'src/shared/migrations',
    },
}