import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute"
import * as OpenApiValidator from 'express-openapi-validator';
import { logger } from "./utils/logger";

dotenv.config();

const app = express();
const spec = path.join(__dirname, '.', 'api_specifications', 'openapi.json');

app.use(cors());
app.use(express.json());
app.use(express.text());

app.use('/spec', express.static(spec));

app.use(
  OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    validateResponses: true,
    $refParser: {
      mode: 'bundle'
    },
  }),
);

app.use(`/${process.env.API_VERSION}/users`, userRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  logger.error(`[${req.method}] ${req.url} - ${status}: ${err.message}`);
  
  res.status(status).json({
    code: status,
    status: status >= 500 ? "error" : "fail",
    message: err.message,
  });
});

app.listen(process.env.port, () => {
    console.log("App running on port: ", process.env.port);
})