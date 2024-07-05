// lib/db.js
import sql from 'mssql';

const config = {
    user: 'sa',
    password: 'Minhthien1$', // Replace with your SA password
    server: 'localhost',
    port: 1433,
    database: 'testing', // Replace with your database name
    options: {
        encrypt: true, // For Azure SQL Database
        trustServerCertificate: true, // Change to false for production
    },
};

let pool: Promise<sql.ConnectionPool>;

// Function to get the database connection
export async function getDbConnection(): Promise<sql.ConnectionPool> {
    if (!pool) {
        pool = sql.connect(config); // Note that we remove 'await' here
    }
    return pool;
}
