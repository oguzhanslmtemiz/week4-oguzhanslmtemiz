import { Request, Response } from "express";
import httpStatus from "http-status";
import { IDatabaseError } from "../interfaces/Error";
import { create } from "../services/users";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await create(req.body);
    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    const duplicateErr = error as IDatabaseError;
    if (duplicateErr.code === "ER_DUP_ENTRY") {
      res
        .status(httpStatus.NOT_ACCEPTABLE)
        .send({ error: "Username already in use" });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
};
