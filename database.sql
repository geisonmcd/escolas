create table institution(
    id_institution serial primary key, 
    name varchar(50) not null
);
create table app_user(
    id_app_user serial primary key, 
    name varchar(50) not null, 
    password text not null
);
create table review (
    id_review serial primary key,
    id_app_user integer references app_user, 
    id_institution integer references institution, 
    grade integer, 
    opinion varchar, 
    unique (id_app_user, id_institution)
);

insert into app_user values (1, 'geison machado', '123456');