CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    firstName VARCHAR(80),
    lastName VARCHAR(80),
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    phone TEXT,
    email TEXT,
    img TEXT
);