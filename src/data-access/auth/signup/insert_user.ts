import { INSERT_SIGNUP_USER } from './queries';
import { PoolClient } from 'pg';
import { Users } from './dto/types';

export async function saveSignupUser(db:PoolClient,users:Users){
    const {rows} = await db.query(INSERT_SIGNUP_USER,[
        users.name,
        users.email,
        users.password,
        users.user_rol,
        new Date(),
        new Date()
    ]);
    return rows[0];
}