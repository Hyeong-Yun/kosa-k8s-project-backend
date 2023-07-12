import mysql from 'mysql';

export const config = {
    db: {
      host: "database-1.cghdvtao1swe.ap-northeast-2.rds.amazonaws.com",
      user: "admin",
      databse: "toys",
      password: "nwmc1023!!",
    },
  };

const pool = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  database: config.db.databse,
  password: config.db.password,
});

pool.connect(); 

export const db = pool.promise();