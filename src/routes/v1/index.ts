import express from 'express'
import { database } from '../../middleware'
import auth from './auth'
import article from './article'
import document from './document'

const router = express.Router()
router.use('/', database, auth);
router.use('/article',database,article)
router.use('/document', document)

export default router;