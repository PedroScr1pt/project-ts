import express from 'express'
import { database } from '../../middleware'
import auth from './auth'
import article from './article'

const router = express.Router()
router.use('/', database, auth);
router.use('/article',database,article)



export default router;