CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    firstName VARCHAR(80),
    lastName VARCHAR(80),
    email TEXT,
    phone TEXT,
    address TEXT,
    img TEXT
);