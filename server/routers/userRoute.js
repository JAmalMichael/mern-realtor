import express from 'express'
import {userTest, userSignUp} from '../controllers/userController.js'


const router = express.Router()

router.get('/test', userTest)
router.post('/signup', userSignUp)

 export default router;