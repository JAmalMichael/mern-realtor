import express from 'express'
import userTest from '../controllers/userController.js'

const router = express.Router()

router.get('/test', userTest)

 export default router;