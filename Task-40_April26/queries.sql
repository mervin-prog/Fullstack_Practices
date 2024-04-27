CREATE TABLE results (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    imgPath VARCHAR(100),
    password VARCHAR(100)
);