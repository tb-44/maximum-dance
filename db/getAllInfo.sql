SELECT
parents.firstName as parents_firstName, 
parents.lastName as parents_lastName, 
dancers.firstName as dancers_firstName, 
dancers.lastName as dancers_lastName,
parents.email,
parents.phone,
dancers.classname,
dancers.age
FROM parents
JOIN dancers on dancers.parent_id = parents.id
WHERE parents.id = $1;