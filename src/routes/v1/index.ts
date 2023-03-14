import express from 'express'
import { database } from '../../middleware'
import auth from './auth'

const router = express.Router()
router.use('/', database, auth);



export default router;