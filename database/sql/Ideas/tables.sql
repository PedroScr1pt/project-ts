/*Implementados*/
CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50)NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255)NOT NULL,
    user_rol INTEGER REFERENCES  rol(id) ON DELETE CASCADE,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NULL


);
CREATE TABLE article (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50)NOT NULL,
    contenido VARCHAR NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NULL
);
CREATE TABLE clients (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE,
    client_article INTEGER REFERENCES article(id) on DELETE CASCADE,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NULL
);


/*No Implementada*/
CREATE TABLE rol(
    id SERIAL NOT NULL PRIMARY KEY,
    rol_name VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  data BYTEA NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NULL
);

user_id INTEGER REFERENCES users(id)

ALTER TABLE article ADD COLUMN user_id INTEGER REFERENCES users(id);