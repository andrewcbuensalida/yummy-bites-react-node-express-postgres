-- open pg shell
\l lists all the databases

-- change password
alter user postgres password '<myPassword>';

-- to create database
CREATE DATABASE yummybites;

-- switch to new database 
\c yummybites

-- display tables
\d

--display table columns
\d <table name>



-- this is to create the table. have users in the future, but for now just yummybites
CREATE TABLE "customer" (
    id integer not null primary key,
    "firstName" varchar(50) not null,
    "lastName" varchar(50) not null,
    "homeAddress" varchar(100) not null,
	"cellPhone" varchar(50) not null
);

--to delete table
DROP TABLE "customer";


-- CREATE TABLE yummybites (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     -- user_id BIGINT NOT NULL REFERENCES user(id),
--     title VARCHAR(50) NOT NULL,
--     body VARCHAR(255) NOT NULL,
--     rank INT NOT NULL check( rank > 0 )
-- );

-- populate table with some data
INSERT INTO customer ("firstName","lastName","homeAddress","cellPhone") VALUES ('John','Lennon','345 Penny Lane, United Kingdom', '0934-652-6435');
INSERT INTO customer ("firstName","lastName","homeAddress","cellPhone") VALUES ('Paul','McCartney','262 Strawberry Fields, United Kingdom', '0935-652-6775');

-- check to see if data is in
SELECT * FROM customer;

-- exit out of database
\q

-- exit out of regular system user
exit

select *
from doctors
    left join(
        select doctor_id,
            count(*),
            TRUNC(AVG(rating), 1) as average_rating
        from reviews
        group by doctor_id
    ) reviews on doctors.id = reviews.doctor_id;


    ?
