# Institutions
O projeto está em nodejs 8 e angularjs 1.x com banco de dados postgres 10.

Infelizmente não consegui atender a todos os requisitos e ficou bem simples, mas foi o que consegui fazer nesses últimos dias.
Não trabalho com docker ainda e não tive tempo de pesquisar então a aplicação não está 'dockerizada'.

#Instruções

Clone o projeto.
Atere os valores no arquivo config.js para se conectar ao seu banco

config.database.user = 'postgres';

config.database.db = 'institutions';

config.database.pw = '123456';

config.database.host = 'localhost';

config.database.port = 5432

Crie uma base de dados 'institutions' no banco.

Rode os comandos abaixo que estão no arquivo database.sql

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

Rode instal.sh na pasta root do projeto para instalar os packages do npm.

Rode run.sh na pasta root do projeto para rodar as tasks do gulp e iniciar o servidor.

Acesse na porta 5000
