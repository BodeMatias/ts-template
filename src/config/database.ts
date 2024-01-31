import mongoose from "mongoose";
import env from "./env";

async function initializeDatabase(): Promise<void> {
  await mongoose.connect(env.database.connectionString);
}

export default initializeDatabase;
