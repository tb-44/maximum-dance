INSERT INTO dancers
(parent_id, firstName, lastName, classname, age
VALUES
($1, $2, $3, $4, $5)
RETURNING *;
