import { BaseRequest } from '../../../middleware/types';
import bcrypt from 'bcrypt';
import { validateUser  } from '../../../data-access';
import jwt from 'jsonwebtoken';



export const signin = async (req:BaseRequest,res:any)=>{
    const {db,body} =req;
    const email  = body.email
    const password = body.password
    
    const usersid:any  = await validateUser(db, email)
    
    if(!usersid){
        return res.status(400).json({success: false,msg:'El usuario no existe'})
    }
    if (!bcrypt.compareSync(password,usersid.password)){
        return res.status(400).json({success: false,msg:'El usuario no existe'})
    }
    const token:string = jwt.sign({_id:usersid},process.env.JWT_SECRET||'local')

    return res.status(200).json({success: true, token})


   

    

}
