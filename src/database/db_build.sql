BEGIN;

DROP TABLE IF EXISTS bugbears CASCADE;

CREATE TABLE bugbears (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100),
    name VARCHAR(100),
    rage_level INTEGER,
    description VARCHAR(280)
);

INSERT INTO bugbears (category, name, rage_level, description)
VALUES
('humans', 'grumpycat44', 4, 'stroking me backwards'),
('politics', 'spamface', 5, 'trump');


COMMIT;
