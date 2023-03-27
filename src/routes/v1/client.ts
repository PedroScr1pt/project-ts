import { Router } from 'express'
const router: Router = Router()

import { postclient } from '../../controllers'

router.post('/', postclient)
router.get('/:id/article'/*, getClientArticle*/)




export default router;