import {Router} from 'express'   
const router:Router = Router()

import {
    saveArticle,
    searchArticle,
    searchArticleById,
    deletearticle,
    updateArticle } from '../../controllers'

router.get('/', searchArticle)
router.get('/:idArticle',searchArticleById)
router.post('/',saveArticle)
router.delete('/:idArticle',deletearticle)
router.put('/',updateArticle )




export default router;