import app from "./app.js";
import env from "./config/env.js";
import sequelize from "./config/database.js";
import { EagerLoadingError } from "sequelize";
import { isColString } from "sequelize/lib/utils";

async function startServer(params) {
    try {
    sequelize.authenticate();

    console.log(" Database Connected");

    await sequelize.sync();
    console.log("Models Synced");

    app.listen(env.port , () => {
        console.loge(`Server running on port ${env.port}`);
    } );
    
}
catch (error)
{
    console.error("server error ");
    console.error(error);

}
}

