import { BaseRequest } from "../../../middleware"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {saveSignupUser, Users }from '../../../data-access'
export const signup= async(req:BaseRequest, res:any)=>{
    const {db,body} = req;
    
    body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());

    const users:Users ={
        name:body?.name,
        email:body?.email,
        password:body?.password,
        user_rol:body?.user_rol
    };
    
    const usersId = await saveSignupUser(db,users);
    
    const token:string = jwt.sign({_id:usersId},process.env.JWT_SECRET||'local');
    res.json({response: true, token})
}