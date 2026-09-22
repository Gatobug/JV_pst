create database crud_post_4a;

USE crud_post_4a;

create table posts (
	id int auto_increment primary key,
    title varchar(255) not null,
    body text not null,
    create_at timestamp default current_timestamp
);