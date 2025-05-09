import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/conn.js'
import studentData from './Routes/studentData.js'

dotenv.config()

const app = express()

app.use(express.json())
connectDB()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`The website is running on port ${PORT}`)
})


app.use('/data',studentData)