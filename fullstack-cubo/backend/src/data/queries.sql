CREATE TABLE case_cubo_data (
	id int NOT NUll PRIMARY KEY,
    first_name VARCHAR(255) NOT NUll,
    last_name VARCHAR(255) NOT NUll,
    participation FLOAT NOT NUll
);

DROP TABLE case_cubo_data;
INSERT INTO case_cubo_data (id, first_name, last_name, participation )
VALUES 
(1, "Carlos", "Moura", 0.05),
 (2, "Fernanda", "Oliveira", 0.15),
 (3, "Hugo", "Silva", 0.20),
 (4, "Eliza", "Souza", 0.20),
 (5, "Anderson", "Santos", 0.40);

 SELECT * FROM case_cubo_data;