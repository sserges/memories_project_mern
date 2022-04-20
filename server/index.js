import express from 'express'
import colors from 'colors'
import cors from 'cors'

import dotenv from 'dotenv'

const conf = dotenv.config()

import connectDB from './config/db.js'

connectDB()

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())
