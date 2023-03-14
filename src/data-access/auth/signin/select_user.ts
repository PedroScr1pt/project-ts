import { PoolClient } from 'pg';
import { SELECT_USERS} from './queries';
import { User } from './dto/types';



export async function validateUser(db: PoolClient,email:any){
  const { rows } = await db.query(SELECT_USERS,[email]);
  return rows[0]
  
  
  
}

