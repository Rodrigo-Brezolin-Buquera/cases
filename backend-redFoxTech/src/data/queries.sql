CREATE TABLE
    IF NOT EXISTS Pokemon_go (
        name VARCHAR(255) NOT NULL,
        pokedex_number INT NOT NULL PRIMARY KEY,
        img_name INT NOT NULL,
        generation INT NOT NULL,
        evolution_stage INT NOT NULL,
        evolved INT NOT NULL,
        family_ID INT NOT NULL,
        cross_gen INT NOT NULL,
        type1 VARCHAR(255),
        type2 VARCHAR(255),
        weather1 VARCHAR(255),
        weather2 VARCHAR(255),
        stat_total INT NOT NULL,
        atk INT NOT NULL,
        def INT NOT NULL,
        sta INT NOT NULL,
        legendary INT NOT NULL,
        aquireable INT NOT NULL,
        spawns INT NOT NULL,
        regional INT NOT NULL,
        raidable INT NOT NULL,
        hatchable INT NOT NULL,
        shiny INT NOT NULL,
        nest INT NOT NULL,
        new INT NOT NULL,
        not_gettable INT NOT NULL,
        future_evolve INT NOT NULL,
        CP40 INT NOT NULL,
        CP39 INT NOT NULL
    );