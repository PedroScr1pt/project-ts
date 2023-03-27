CREATE TABLE  client(
  client_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NULL
);

CREATE TABLE article (
  article_id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   category VARCHAR(50)NOT NULL,
   contenido VARCHAR NOT NULL,
   price INTEGER NOT NULL,
   stock INTEGER NOT NULL,
   "createdAt" TIMESTAMP NOT NULL,
   "updatedAt" TIMESTAMP NULL
);

CREATE TABLE client_article (
  client_id INTEGER REFERENCES client(client_id) ON DELETE CASCADE,
  article_id INTEGER REFERENCES article(article_id) ON DELETE CASCADE,
  PRIMARY KEY (client_id, article_id)
);
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  data BYTEA NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NULL
);