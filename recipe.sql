CREATE TABLE "recipe"(
    "id" SERIAL PRIMARY KEY,
    "food" VARCHAR(255) UNIQUE,
    "serving" decimal NOT NULL,
    "quantity" decimal NOT NULL,
    "uom" VARCHAR(255) NOT NULL
);