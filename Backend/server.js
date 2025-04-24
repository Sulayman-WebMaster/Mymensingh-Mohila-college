import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`The website is running on port ${PORT}`)
})

app.use('/',(req,res)=>{
    res.send("hello world")
})