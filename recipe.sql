
CREATE TABLE "recipe"(
    "id" SERIAL PRIMARY KEY,
	"recipe" VARCHAR(255) NOT NULL,
    "food" VARCHAR(255) NOT NULL,
    "serving" decimal NOT NULL,
    "quantity" decimal NOT NULL,
    "uom" VARCHAR(255) NOT NULL
);