module.exports = {
  db: {
    client: "pg",
     connection: process.env.DATABASE_URL || {
      database: process.env.DB_NAME || "chlothar",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD
    }
  }
}