import { PoolClient } from "pg"
import { SELECT_ARTICLE, SELECT_ARTICLE_BY_ID } from './queries';


export const getArticleDA = async (db: PoolClient, res: any) => {
    try {
        const { rows } = await db.query(SELECT_ARTICLE)
        return rows
    } catch (error) {
        return res.status(400).json({ "Response": "false" })
    }
}
export const getArticleByIdDA = async (db: PoolClient, idArticle: number) => {
    try {
        const { rows } = await db.query(SELECT_ARTICLE_BY_ID, [idArticle])
        if (!rows.length) { return console.log("error"); }
        return rows[0]
    } catch (error) {
        console.log(error)
        return console.error(error)
    }

}