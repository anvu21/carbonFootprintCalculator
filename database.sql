CREATE DATABASE FCF;

DROP TABLE IF EXISTS food;

CREATE TABLE "food"(
    "id" SERIAL PRIMARY KEY,
    "food" VARCHAR(255) UNIQUE,
    "unit" VARCHAR(255) NOT NULL,
    "carbon" decimal NOT NULL
);

INSERT INTO food (food, unit, carbon) VALUES ('rice' ,'g' ,50 );
Select * from food;

const Food = await pool.query(
            "INSERT INTO food (food, unit, carbon) 
            VALUES ($1,$2 ,$3) 
            ON CONFLICT (food) DO NOTHING",
            [name,unit,carbon]
          );