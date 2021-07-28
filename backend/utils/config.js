require('dotenv').config()

const PORT = process.env.BACKEND_PORT || 2222

const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USERNAME
const db_password = process.env.POSTGRES_PASSWORD

const dialect = 'postgres'

const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}

module.exports = {
    PORT,
    db_host,
    db_name,
    db_user,
    db_password,
    dialect,
    pool
}