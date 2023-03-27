import { INSERT_CLIENT } from './queries';
import { PoolClient } from 'pg';
import { Client } from './dto/types';
export async function postClientDA(db: PoolClient, client: Client) {
    const { rows } = await db.query(INSERT_CLIENT, [
        client.name,
        new Date(),
        new Date()
    ]);
    return rows[0];
}

