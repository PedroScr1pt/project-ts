import { PoolClient } from "pg";
import { Article } from './dto/types';
import { UPDATE_ARTICLE } from "./queries";
export const putArticleDA = async (db:PoolClient,article:Article) => {
    try {
        const {rows}= await db.query(UPDATE_ARTICLE,
        [   
            article.name,
            article.category,
            article.contenido,
            article.price,
            article.stock,
            article.id
        ])
        return rows[0]
    } catch (error) {
        return { status: false, error };
    }
}