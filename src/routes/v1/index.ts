import express from 'express'
import { database } from '../../middleware'
import auth from './auth'
import article from './article'
import document from './document'
import client from './client'
const router = express.Router()
router.use('/', database, auth);
router.use('/article', database, article)
router.use('/document', document)
router.use('/client', database, client)

export default router;