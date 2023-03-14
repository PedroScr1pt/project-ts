export const SELECT_USERS = `
  SELECT
    email, password
  FROM
    users
  WHERE
    email = $1
`
