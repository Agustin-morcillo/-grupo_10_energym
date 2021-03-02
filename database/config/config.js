module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "energym",
    "host": "localhost",
    "dialect": "mysql",
    "define":{
      "underscored": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host":process.env.HOST ,
    "dialect": "mysql"
  }
}