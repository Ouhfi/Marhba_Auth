import dotenv from 'dotenv';

dotenv.config();

export default {
    port : process.env.port,

    db: {
        host : process.env.DB_HOST,
        port : process.en.DB_PORT,
        database : process.env.DB_USER,
        username : process.env.DB_NAME,
        password : process.env.DB_PASSWORD, 
    }
    // ,
    // jwt: {
    // secret: process.env.JWT_SECRET,
    // expiresIn: process.env.JWT_EXPIRES_IN,
  //}

};