import express from 'express'
import colors from 'colors'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

import errorHandler from './middlewares/errorMiddleware.js'

import connectDB from './config/db.js'

import postRoutes from './routes/posts.js'

connectDB()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use(errorHandler)

app.use('/posts', postRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`))
