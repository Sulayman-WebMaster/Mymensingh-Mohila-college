import express from 'express'
import { studentDataEntry } from '../controllers/studentDataEntry.js'


const router =  express.Router()

router.post('/student-entry',studentDataEntry)
export default router