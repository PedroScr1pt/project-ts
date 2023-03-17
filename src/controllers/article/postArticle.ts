import { BaseRequest } from '../../middleware/types';
import { postArticleDA, Article } from '../../data-access';

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

        const SAVE_ARTICLE = await postArticleDA(db, article);
        res.status(200).json({ "Response": true, "message": SAVE_ARTICLE });
    } catch (error) {

        console.log(error);
        return res.status(400).json({ "Response": false, "message": error });
    
    }
}