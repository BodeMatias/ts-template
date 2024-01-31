import dotenv from "dotenv";

dotenv.config();

export default {
  database: {
    connectionString: process.env.DB_CONNECTION_STRING ?? "",
  },
  server: {
    port: process.env.PORT ?? 3000,
  },
};
