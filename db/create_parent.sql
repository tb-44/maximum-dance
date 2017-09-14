INSERT INTO parents
(auth_id, firstName, lastName, email, img)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;