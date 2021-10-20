"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
exports.app = "\nimport \"reflect-metadata\";\nimport \"express-async-errors\";\nimport \"dotenv/config\";\nimport { resolve } from \"path\";\nimport express, { NextFunction, Request, Response } from \"express\";\nimport cors from \"cors\";\nimport swaggerUi from \"swagger-ui-express\";\n\nimport { router } from \"../routes\";\nimport { AppError } from \"@shared/errors/AppError\";\nimport upload from \"@config/upload\";\nimport swaggerFile from \"../../../../swagger.json\";\nimport \"@shared/container\";\n\nexport const app = express();\n\napp.use(express.json());\n\napp.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));\napp.use(\"/avatar\", express.static(`${ upload.tmpFolder }/avatar`));\n\napp.use(cors());\napp.use(router);\n\napp.use(\n  (err: Error, request: Request, response: Response, next: NextFunction) => {\n    if (err instanceof AppError) {\n      return response.status(err.statusCode).json({ message: err.message });\n    }\n\n    return response.status(500).json({\n      status: \"Error\",\n      message: `Internal Server Error - ${err.message}`,\n    });\n  }\n);\n";