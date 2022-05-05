create database crudNodeMysql;
use crudNodeMysql;

create table customer(
    id int(6) unsigned auto_increment primary key not null,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15)
);

Show tables;