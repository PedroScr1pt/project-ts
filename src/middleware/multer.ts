import multer from 'multer'

import path from 'path';

    const storage = multer.diskStorage({
        destination:'./documents',
        filename:(req,file,cb)=>{
            cb(null,"Document"+file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
        },
    })
    


export default multer({storage})

