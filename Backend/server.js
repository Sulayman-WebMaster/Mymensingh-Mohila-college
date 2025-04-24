import express from 'express'
import dotevn from 'dotenv'
dotevn.config()
const app = express()
app.use(express.json())
app.listen('/',()=>{
    `the website running on ${dotevn.Proc}`
})