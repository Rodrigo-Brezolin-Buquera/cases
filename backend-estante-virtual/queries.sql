CREATE TABLE IF NOT EXISTS Competitions (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Competitions_results (
  id VARCHAR(255) PRIMARY KEY,
  competition VARCHAR(255) NOT NULL,
  athlete VARCHAR(255) NOT NULL,
  value FLOAT NOT NULL,
  metric VARCHAR(64) NOT NULL,
  FOREIGN KEY(competition) REFERENCES Competitions(name)
);

DROP TABLE Competitions_results;