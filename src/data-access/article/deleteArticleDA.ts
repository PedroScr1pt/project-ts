import { PoolClient } from "pg";
import { DELETE_ARTICLE } from './queries'
export async function deletearticleDA(
  db: PoolClient,
  idArticle: number
) {
  try {
    const { rows } = await db.query(DELETE_ARTICLE, [idArticle]);
    if (!rows.length) { return console.log("error") }
    return rows[0]
  } catch (error) {
    console.log('error', error);
    return { status: false, error };
  }
}
