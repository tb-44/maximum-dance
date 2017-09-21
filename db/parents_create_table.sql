CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(80),
    lastName VARCHAR(80),
    email TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT
);