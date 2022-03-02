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
    id BIGSERIAL not null primary key,
    "firstName" varchar(50) not null,
    "lastName" varchar(50) not null,
    "homeAddress" varchar(100) not null,
	"cellPhone" varchar(50) not null
);

--to delete table
DROP TABLE "customer";

--creating products table, integer as the type for id didn't automatically create the default nextval sequence. had to do it manually with
CREATE SEQUENCE product_id_seq START 1;
ALTER TABLE product ALTER COLUMN id SET DEFAULT nextval('product_id_seq');


CREATE TABLE "product" (
    id integer not null primary key,
    "name" varchar(100) not null,
    "price" integer not null,
    "imageUrl" varchar(500) not null
);


-- populate customer table with some data
INSERT INTO customer ("firstName","lastName","homeAddress","cellPhone") VALUES ('John','Lennon','345 Penny Lane, United Kingdom', '0934-652-6435');
INSERT INTO customer ("firstName","lastName","homeAddress","cellPhone") VALUES ('Paul','McCartney','262 Strawberry Fields, United Kingdom', '0935-652-6775');

-- check to see if data is in
SELECT * FROM customer;


---- populate product table with some data
INSERT INTO product ("name","price","imageUrl") VALUES ('dozen Chicken Empanada','150','https://www.curiouscuisiniere.com/wp-content/uploads/2018/09/Fried-Bolivian-Chicken-Empanadas.jpg.webp');
INSERT INTO product ("name","price","imageUrl") VALUES ('box Kutsinta','200','https://4.bp.blogspot.com/-sgxcgr2z5vo/WMbQCoYNPoI/AAAAAAAADvI/QALCKMlkfd4t_0hWAGchen_A0g4h3LGnQCLcB/s1600/Snapshot%25281264%2529.bmp');


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

-- CREATE TABLE heat (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     -- user_id BIGINT NOT NULL REFERENCES user(id),
--     title VARCHAR(50) NOT NULL,
--     body VARCHAR(255) NOT NULL,
--     rank INT NOT NULL check( rank > 0 )
-- );


--