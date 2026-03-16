CREATE TABLE users (
    id UUID PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    current_difficulty INTEGER DEFAULT 1
);

CREATE TABLE tests (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    previous_difficulty INTEGER,
    score INTEGER,
    percentage FLOAT
);

CREATE TABLE topic_performance (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    topic TEXT,
    correct INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0
);