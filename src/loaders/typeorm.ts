import "reflect-metadata";
import { createConnection } from "typeorm";
import { IDatabaseError } from "../interfaces/Error";

export default async () => {
  try {
    await createConnection();
    console.log("Database connected successfully");
  } catch (error) {
    const databaseError = error as IDatabaseError;
    if (databaseError.code === "ER_BAD_DB_ERROR") {
      throw new Error(
        `DB Connection ERROR: First you need to create a database with the same name in env file. ${databaseError.sqlMessage}
        example SQL Script => CREATE DATABASE gustobootcampw4 ;
        `
      );
    }
    throw new Error(`DB Connection ERRORR: ${error}`);
  }
};
