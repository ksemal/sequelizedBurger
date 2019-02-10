CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (300) NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY
    (id)
);