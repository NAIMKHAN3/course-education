import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'Course Education Server is Running' })
})

export default app
