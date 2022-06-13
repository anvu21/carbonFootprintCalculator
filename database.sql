CREATE TABLE "food"(
    "id" SERIAL PRIMARY KEY,
    "food" VARCHAR(255) UNIQUE,
    "unit" VARCHAR(255) NOT NULL,
    "carbon" decimal NOT NULL
);

