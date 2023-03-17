import { PoolClient } from "pg";
import { SAVE_ARTICLE } from './queries'
import { Article } from "./dto/types";


export async function postArticleDA(db: PoolClient, article: Article) {
    try {
        const { rows } = await db.query(SAVE_ARTICLE, [
            article.name,
            article.category,
            article.contenido,
            article.price,
            article.stock,
            new Date(),
            new Date()
        ]);
        return rows[0]
    } catch (error) {
        return error
    }
}