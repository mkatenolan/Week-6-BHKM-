BEGIN;

DROP TABLE IF EXISTS bugbears CASCADE;
DROP TABLE IF EXISTS login CASCADE;

CREATE TABLE bugbears (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100),
    name VARCHAR(100),
    rage_level INTEGER,
    description VARCHAR(280)
);

CREATE TABLE login (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
);


INSERT INTO bugbears (category, name, rage_level, description)
VALUES
('humans', 'grumpycat44', 4, 'stroking me backwards'),
('politics', 'spamface', 5, 'trump');

INSERT INTO login (username, password),
VALUES ('user1', 'test1');

COMMIT;
