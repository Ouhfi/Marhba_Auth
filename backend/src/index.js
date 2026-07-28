import app from "./app.js";
import env from "./config/env.js";
import sequelize from "./config/database.js";
import User from "./models/user.model.js"; 

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log(" Database Connected");

    await sequelize.sync();
    console.log(" Models Synced");

    app.listen(env.port, () => {
      console.log(` Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error(" Server Error");
    console.error(error);
  }
}

startServer();