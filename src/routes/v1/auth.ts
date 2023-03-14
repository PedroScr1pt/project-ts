import {Router} from 'express'   
const router:Router = Router()

import {signup, signin} from '../../controllers'

router.post('/signup', signup)
router.post('/signin', signin)



export default router;