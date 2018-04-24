INSERT INTO users (username, password, gender, age, profile_pic, auth_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;