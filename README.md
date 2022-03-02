npx create-react-app client --template typescript

https://www.youtube.com/watch?v=SEnAS_ooHeA
to initialize typescript with node
tsc --init

-- open pg shell
\l lists all the databases

-- change password
alter user postgres password '<myPassword>';

-- to create database
CREATE DATABASE heat;

-- switch to new database 
\c heat

-- display tables
\d

--display table columns
\d <table name>

-- this is to create the table. have users in the future, but for now just heats
CREATE TABLE customer (
    id bigserial not null primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    homeAddress varchar(100) not null,
	cellPhone varchar(50) not null
);

CREATE TABLE heats (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    -- user_id BIGINT NOT NULL REFERENCES user(id),
    title VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    rank INT NOT NULL check( rank > 0 )
);

-- populate table with some data
insert into heats (title,body,rank) values ('First run of the app', 'This is my first heat. I enjoyed it very much.', '1');
insert into heats (title,body,rank) values ('Side stitches', 'I got side stitches.', '9'); 

-- check to see if data is in
select * from heats;

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
