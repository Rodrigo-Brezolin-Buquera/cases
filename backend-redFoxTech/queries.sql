CREATE TABLE IF NOT EXISTS Competitions (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(255) NOT NULL
);

