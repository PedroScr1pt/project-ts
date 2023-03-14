export const INSERT_SIGNUP_USER = `
  INSERT INTO
    users (name,email,password,user_rol,"createdAt","updatedAt")
  VALUES
    ($1,$2,$3,$4,$5,$6)
  RETURNING
    id`;