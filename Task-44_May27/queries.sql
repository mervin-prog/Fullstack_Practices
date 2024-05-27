CREATE TABLE details (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    reset_token VARCHAR,
    reset_token_expiry VARCHAR
);