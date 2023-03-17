import { BaseRequest } from '../../middleware/types';
import { postArticleDA, Article } from '../../data-access';
import { QueryResult } from 'pg';

export const saveArticle = async (req: BaseRequest, res: any) => {
    try {
        const { db, body } = req;

        const article: Article = {
            name: body?.name,
            category: body?.category,
            contenido: body?.contenido,
            price: body?.price,
            stock: body?.stock,
        }

        const saveArticle:QueryResult = await postArticleDA(db, article);
        res.status(200).json({ Response: true, "msg": saveArticle });
    } catch (error) {

        console.log(error);
        return res.status(400).json({ Response: false, "msg": error });
    
    }
}