CREATE TABLE dancers(
id SERIAL PRIMARY KEY,
parent_id INTEGER REFERENCES parents(id),
firstName VARCHAR(80),
lastName VARCHAR (80),
classname TEXT,
age INTEGER
);