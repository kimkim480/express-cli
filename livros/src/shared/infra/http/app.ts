
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import { resolve } from "path";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { router } from "../routes";
import { AppError } from "@shared/errors/AppError";
import upload from "@config/upload";
import swaggerFile from "../../../../swagger.json";
import "@shared/container";

export const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/avatar", express.static(`${ upload.tmpFolder }/avatar`));

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);
