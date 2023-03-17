import { BaseRequest } from "../../middleware"
import { deletearticleDA } from "../../data-access"
import { QueryResult } from "pg"
export const deletearticle = async (req: BaseRequest, res: any) => {
    try {
        const { db } = req
        const { idArticle } = req.params
        const article: QueryResult = await deletearticleDA(db, +idArticle)
        if (!article) {
            return res.status(404).json({ Response: false, msg: "Article not exists" })
        }
        return res.status(200).json({ Response: true, msg: "Article deleted" })


    } catch (error) {
        console.log(error);
        return res.status(400).json({ Response: false, msg: error })
    }
}