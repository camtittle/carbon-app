import express, { Application, json } from 'express';
import dotenv from 'dotenv';
import { getProjectsController } from './controllers/index.js';
import cors from 'cors';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(json())
app.use(cors())

app.get('/projects', getProjectsController);

app.listen(port, () => {
  console.log(`Server is listening at https://localhost:${port}`);
});