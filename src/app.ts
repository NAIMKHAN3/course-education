import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import errorHandler, { notfoundandler } from './middleware/errorHandler'
import router from './router'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'Course Education Server is Running' })
})
app.use('/api/v1', router)
app.use(notfoundandler)
app.use(errorHandler)

export default app
