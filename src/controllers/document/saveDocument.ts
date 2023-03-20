import { Request, Response } from 'express';
export const saveDocument  = async (req:Request, res:Response)=>{

    try{
        console.log('Save Document'),
        res.status(200).json({success:true, msg:"SaveDocument"})
    }catch(error){
        console.log('Error: Controllers')
        return res.status(400).json({success:false,msg:"error en el controlador"})
    }
}