import express from "express";
import env from "./config/env";
import setupRoutes from "./infraestructure/routers";
import initializeDatabase from "./config/database";
const app = express();

setupRoutes(app);

app.listen(env.server.port, () => {
  console.log(`Server is listening on port ${env.server.port}`);
});

initializeDatabase()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((error) => {
    console.error(error);
  });
