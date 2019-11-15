create database onlinebloodbank

drop table user_details

create table user_details(UserId int identity(1000,1) primary key ,First_Name varchar(50)not null,Last_Name varchar(50)not null,Age int not null,Gender varchar(10),Email varchar(30)not null,Contact bigint not null,Pass varchar(15) not null,Weight int not null,State varchar(30) not null,Area varchar(30) not null,Pin_Code bigint not null,Blood_Group varchar(5) not null,Role varchar(10) default 'User')

select * from user_details

create table blood_details(Id int identity(100,1) primary key ,UserId int foreign Key references user_details(UserId) ,Blood_Group varchar(5) not null,State varchar(30) not null,Area varchar(30) not null,Pin_Code int not null,Contact bigint not null,Status varchar(5) not null)

create table slot_details(Slot_id int identity(200,1) primary key ,UserId int foreign Key references user_details(UserId) ,Hospital varchar(30) not null,City Varchar(30) not null,Date_for_donating Date not null,Time_for_donating varchar(20) not null) 



ALTER TABLE slot_details
ADD FeedBack varchar(500);

select * from slot_details



create table faq(Id int identity(1000,1) primary key,UserId int foreign Key references user_details(UserId),Questions varchar(500),Answers varchar(500))
insert into user_details values('admin','admin',22,'Female','admin@gmail.com',9842121163,'admin',56,'Tamilnadu','Tuticorin',628002,'O+','admin')
insert into user_details values('josebell','priyanka',23,'Female','jose@gmail.com',9948747665,'josebell',52,'Tamilnadu','Shollinganalur',628002,'O+',default)
insert into user_details values('Hirthik','jebasekaran',21,'Female','hirthik@gmail.com',9253465469,'hirthik',69,'Tamilnadu','Shollinganalur',608032,'B+',default)

SELECT * FROM user_details

SELECT * FROM blood_details
insert into blood_details values(1001,'A+','Tamilnadu','Kilpauk',60001,9825341187,'No')
insert into blood_details values(1001,'A-','Tamilnadu','Mettukupam',60001,9845643687,'Yes')
insert into blood_details values(1001,'O+','Tamilnadu','Perambalur',60001,9435634187,'Yes')
insert into blood_details values(1001,'AB-','Tamilnadu','Tuticorin',60001,9878956357,'No')

insert into slot_details values(1001,'Apollo','Shollinganalur','2019/12/03','10.00AM-12.00PM',NULL)
select * from slot_details

insert into faq values(1001,'NULL','NULL')
select * from faq