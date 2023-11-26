import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const dbUri = config.get<string>("dbUri");

async function connect(){
  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to DB");
  } catch (error) {
    logger.error('Error connecting to database: ', error);
    process.exit(1);
  }
}


export default connect;