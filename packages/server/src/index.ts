import express, { Application, json } from 'express'
import dotenv from '@dotenvx/dotenvx'
import { getProjectsController } from './controllers/index.js'
import cors from 'cors'
import { ROUTES } from './routes.js'

//For env File 
dotenv.config()

export const app: Application = express()
const port = process.env.PORT || 8000

app.use(json())
app.use(cors())

app.get(ROUTES.PROJECTS, getProjectsController)

app.listen(port, () => {
  console.log(`Server is listening at https://localhost:${port}`)
})