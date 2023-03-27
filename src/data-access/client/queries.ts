export const INSERT_CLIENT = `
  INSERT INTO
    client (name,"createdAt","updatedAt")
  VALUES
    ($1,$2,$3)
  RETURNING
    client_id`; 