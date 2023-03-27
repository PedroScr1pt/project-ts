export const SAVE_ARTICLE = `
    INSERT INTO
        article (name,category,contenido,price,stock,"createdAt","updatedAt")
    VALUES
        ($1,$2,$3,$4,$5,$6,$7)
    RETURNING 
        article_id
`;

export const SELECT_ARTICLE = `
    SELECT 
        * 
    FROM
        article
    
`;


export const SELECT_ARTICLE_BY_ID = `
SELECT
    *
FROM
    article
WHERE
article_id = $1

`
    ;

export const DELETE_ARTICLE = `
    DELETE FROM
         article
    WHERE
         article_id = $1
         RETURNING *
    `;




export const UPDATE_ARTICLE = `
UPDATE
    article
SET
    name = $1,
    category = $2,
    contenido = $3,
    price = $4,
    stock = $5,
    "updatedAt" = now()
WHERE
    article_id = $6
RETURNING
article_id`;


