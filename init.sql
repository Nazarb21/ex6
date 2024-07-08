CREATE TABLE clinics (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(100) NOT NULL,
                         services VARCHAR(255)[] NOT NULL
);

CREATE TABLE doctors (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(100) NOT NULL,
                         clinics INT[] NOT NULL,
                         services VARCHAR(255)[] NOT NULL
);

CREATE TABLE services (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(100) NOT NULL
);
