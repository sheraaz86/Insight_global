
create table application
(
application_id integer AUTO_INCREMENT,
title varchar(100),
description varchar(100),
client varchar(100),
client_priority varchar(50),
target_date varchar(100),
product_area varchar(10),
primary key(application_id)
);