import {Sequelize }  from "sequelize";
import env from "./env.js";

const data =  new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD,
    {
        host: env.DB_HOST,
        dialect: "postgres",
        logging: false
    }
);

export default data;
