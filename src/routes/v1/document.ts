import {Router} from 'express'

const router:Router= Router()
import multer from '../../middleware/multer'
import {saveDocument } from '../../controllers/index'
router.post('/', multer.single('document'),saveDocument)
export default router;

