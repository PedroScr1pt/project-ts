import { BaseRequest } from '../../middleware';

import { putArticleDA, Article } from '../../data-access';

export const updateArticle = async (req: BaseRequest, res: any) => {
    const { db, body } = req
    const article: Article = {
        id: body?.id,
        name: body?.name,
        category: body?.category,
        contenido: body?.contenido,
        price: body?.price,
        stock: body?.stock,
    }
    const articleid = await putArticleDA(db, article)
    if (!articleid) return res.status(400).json({ success: false })
    return res.status(200).json({ success: true,msg: articleid })
}