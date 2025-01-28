import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import mysql from 'mysql2/promise';
import userRoute from "./routes/userRoute"
import * as OpenApiValidator from 'express-openapi-validator';

dotenv.config();

// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'munch',
//   database: process.env.database_name,
//   password: process.env.database_password
// });

const app = express();
const spec = path.join(__dirname, '.', 'api_specifications', 'openapi.json');

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use

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

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.use(`/${process.env.API_VERSION}/users`, userRoute);

app.listen(process.env.port, () => {
    console.log("App running on port: ", process.env.port);
})