import { BaseRequest } from "../../middleware"
import { getArticleDA,getArticleByIdDA } from '../../data-access';
import {QueryResult} from 'pg'


export const searchArticle = async (req: BaseRequest, res: any) => {
    const { db } = req

    const article = await getArticleDA(db, res)
    try { 
        return res.status(200).json({ "success": "true", article }) 
    } catch (error) {
        console.log(error)
        return res.status(400).json({"success":"false"})
    }
}
export const searchArticleById = async (req: BaseRequest, res: any) => {
   
    const {db} =req
    const {idArticle} = req.params
    const articleid:QueryResult = await getArticleByIdDA(db,+idArticle)
    if(!articleid)
        return res.status(400).json({success:false,msg:"Article not exist"})
    return res.status(200).json({seccess:true,articleid})
}