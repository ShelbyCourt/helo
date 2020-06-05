create table usersa (
id serial,
username varchar(20),
password varchar(20),
profile_pic text,
primary key (id)
);

create table posts (
id serial,
title varchar(45),
img text,
content text,
author_id int,
primary key (id),
foreign key (author_id) references usersa(id)
);