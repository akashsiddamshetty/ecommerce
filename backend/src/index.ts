import dotenv from 'dotenv';
import express, { Request, Response } from 'express'
import connectDB from './db';


dotenv.config();

const app = express()
const port = process.env.PORT || 8080

connectDB();


app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})