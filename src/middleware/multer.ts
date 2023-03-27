import multer from 'multer'

import path from 'path';

const storage = multer.diskStorage({
    destination: './documents',
    filename: (req, file, cb) => {
        cb(null, "Document_" + file.fieldname + '_' + Date.now() + "_" + path.extname(file.originalname))
    },
})


export default multer({ storage })

