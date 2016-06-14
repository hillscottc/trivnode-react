CREATE TABLE app_user (
    user_id   SERIAL,
    username  varchar(50) NOT NULL,
    password       varchar(40) NOT NULL,
    email         varchar(40)
);