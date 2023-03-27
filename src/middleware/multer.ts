import { NextFunction, Request, Response } from 'express';
import multer from 'multer'

import path from 'path';
const fileFilter = (req: Request, file: any, cb: any) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Success: false, El archivo no es válido'));
    }
};
const storage = multer.diskStorage({
    destination: './documents',

    filename: (req: Request, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + "_" + path.extname(file.originalname))
    },
})


export default multer({ fileFilter, storage })

