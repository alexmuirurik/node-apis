import express from 'express'
import { getConfluenceData } from '../controllers/ConfluenceController'

const router    =   express.Router()
router.post('/register', Register) 
router.post('/login', Login) 


export default router