CREATE TABLE dancers(
id SERIAL PRIMARY KEY,
parent_id INTEGER REFERENCES parents(id),
firstname VARCHAR(80),
lastname VARCHAR (80),
class TEXT,
age INTEGER,
phone TEXT,
email TEXT,
img TEXT);