select * from sys.tables

create table directors(
id int identity primary key,
name varchar(255),
)
select * from skills
select * from director_requirements

truncate table certifications;

create table available_emps(
	emp_id int primary key,
  skill varchar(255)
  constraint fk_empid foreign key (emp_id)
  references users(user_id)
);

create table project_details()



INSERT INTO users VALUES ('kjones', 'hashed_password_6', 'Employee', 'Katherine Jones', 'katherine.jones@example.com', '5551112233');
INSERT INTO users VALUES ('mroberts', 'hashed_password_7', 'HR', 'Michael Roberts', 'michael.roberts@example.com', '5552223344');
INSERT INTO users VALUES ('bthompson', 'hashed_password_8', 'Employee', 'Barbara Thompson', 'barbara.thompson@example.com', '5553334455');
INSERT INTO users VALUES ('dgarcia', 'hashed_password_9', 'Director', 'David Garcia', 'david.garcia@example.com', '5554445566');
INSERT INTO users VALUES ('rhernandez', 'hashed_password_10', 'Employee', 'Rosa Hernandez', 'rosa.hernandez@example.com', '5555556677');
INSERT INTO users VALUES ('jmartinez', 'hashed_password_11', 'HR', 'James Martinez', 'james.martinez@example.com', '5556667788');
INSERT INTO users VALUES ('llee', 'hashed_password_12', 'Applicant', 'Linda Lee', 'linda.lee@example.com', '5557778899');
INSERT INTO users VALUES ('cwhite', 'hashed_password_13', 'Employee', 'Charlie White', 'charlie.white@example.com', '5558889900');
INSERT INTO users VALUES ('tmoore', 'hashed_password_14', 'Employee', 'Tom Moore', 'tom.moore@example.com', '5559990011');
INSERT INTO users VALUES ('vjackson', 'hashed_password_15', 'HR', 'Victoria Jackson', 'victoria.jackson@example.com', '5550001122');
INSERT INTO users VALUES ('sclark', 'hashed_password_16', 'Employee', 'Steven Clark', 'steven.clark@example.com', '5551234560');
INSERT INTO users VALUES ('pwilson', 'hashed_password_17', 'Director', 'Patricia Wilson', 'patricia.wilson@example.com', '5552345678');
INSERT INTO users VALUES ('dmoore', 'hashed_password_18', 'Employee', 'Daniel Moore', 'daniel.moore@example.com', '5553456789');
INSERT INTO users VALUES ('ajones', 'hashed_password_19', 'HR', 'Alice Jones', 'alice.jones@example.com', '5554567890');
INSERT INTO users VALUES ('slopez', 'hashed_password_20', 'Applicant', 'Samantha Lopez', 'samantha.lopez@example.com', '5555678901');
INSERT INTO users VALUES ('rsmith', 'hashed_password_21', 'Employee', 'Robert Smith', 'robert.smith@example.com', '5556789012');
INSERT INTO users VALUES ('cjohnson', 'hashed_password_22', 'Employee', 'Cynthia Johnson', 'cynthia.johnson@example.com', '5557890123');
INSERT INTO users VALUES ('jthomas', 'hashed_password_23', 'HR', 'John Thomas', 'john.thomas@example.com', '5558901234');
INSERT INTO users VALUES ('bmiller', 'hashed_password_24', 'Director', 'Betty Miller', 'betty.miller@example.com', '5559012345');
INSERT INTO users VALUES ('ahall', 'hashed_password_25', 'Employee', 'Anna Hall', 'anna.hall@example.com', '5550123456');
INSERT INTO users VALUES ('dking', 'hashed_password_26', 'Employee', 'David King', 'david.king@example.com', '5551234567');
INSERT INTO users VALUES ('jwright', 'hashed_password_27', 'HR', 'Jane Wright', 'jane.wright@example.com', '5552345678');
INSERT INTO users VALUES ('mbrown', 'hashed_password_28', 'Applicant', 'Mark Brown', 'mark.brown@example.com', '5553456789');
INSERT INTO users VALUES ('kgarcia', 'hashed_password_29', 'Employee', 'Kevin Garcia', 'kevin.garcia@example.com', '5554567890');
INSERT INTO users VALUES ('tlee', 'hashed_password_30', 'Employee', 'Tina Lee', 'tina.lee@example.com', '5555678901');
INSERT INTO users VALUES ('yrodriguez', 'hashed_password_31', 'HR', 'Yvonne Rodriguez', 'yvonne.rodriguez@example.com', '5556789012');
INSERT INTO users VALUES ('pjackson', 'hashed_password_32', 'Director', 'Paul Jackson', 'paul.jackson@example.com', '5557890123');


SELECT * FROM USERS
delete frOm users

truncate table USERS


INSERT INTO users VALUES
('kjones', 'hashed_password_6', 'Employee', 'Katherine Jones', 'katherine.jones@example.com', '5551112233'),
('mroberts', 'hashed_password_7', 'HR', 'Michael Roberts', 'michael.roberts@example.com', '5552223344'),
('bthompson', 'hashed_password_8', 'Employee', 'Barbara Thompson', 'barbara.thompson@example.com', '5553334455'),
('dgarcia', 'hashed_password_9', 'Director', 'David Garcia', 'david.garcia@example.com', '5554445566'),
('rhernandez', 'hashed_password_10', 'Employee', 'Rosa Hernandez', 'rosa.hernandez@example.com', '5555556677'),
('jmartinez', 'hashed_password_11', 'HR', 'James Martinez', 'james.martinez@example.com', '5556667788'),
('llee', 'hashed_password_12', 'Applicant', 'Linda Lee', 'linda.lee@example.com', '5557778899'),
('cwhite', 'hashed_password_13', 'Employee', 'Charlie White', 'charlie.white@example.com', '5558889900'),
('tmoore', 'hashed_password_14', 'Employee', 'Tom Moore', 'tom.moore@example.com', '5559990011'),
('vjackson', 'hashed_password_15', 'HR', 'Victoria Jackson', 'victoria.jackson@example.com', '5550001122'),
('sclark', 'hashed_password_16', 'Employee', 'Steven Clark', 'steven.clark@example.com', '5551234560'),
('pwilson', 'hashed_password_17', 'Director', 'Patricia Wilson', 'patricia.wilson@example.com', '5552345678'),
('dmoore', 'hashed_password_18', 'Employee', 'Daniel Moore', 'daniel.moore@example.com', '5553456789'),
('ajones', 'hashed_password_19', 'HR', 'Alice Jones', 'alice.jones@example.com', '5554567890'),
('slopez', 'hashed_password_20', 'Applicant', 'Samantha Lopez', 'samantha.lopez@example.com', '5555678901'),
('rsmith', 'hashed_password_21', 'Employee', 'Robert Smith', 'robert.smith@example.com', '5556789012'),
('cjohnson', 'hashed_password_22', 'Employee', 'Cynthia Johnson', 'cynthia.johnson@example.com', '5557890123'),
('jthomas', 'hashed_password_23', 'HR', 'John Thomas', 'john.thomas@example.com', '5558901234'),
('bmiller', 'hashed_password_24', 'Director', 'Betty Miller', 'betty.miller@example.com', '5559012345'),
('ahall', 'hashed_password_25', 'Employee', 'Anna Hall', 'anna.hall@example.com', '5550123456'),
('dking', 'hashed_password_26', 'Employee', 'David King', 'david.king@example.com', '5551234567'),
('jwright', 'hashed_password_27', 'HR', 'Jane Wright', 'jane.wright@example.com', '5552345678'),
('mbrown', 'hashed_password_28', 'Applicant', 'Mark Brown', 'mark.brown@example.com', '5553456789'),
('kgarcia', 'hashed_password_29', 'Employee', 'Kevin Garcia', 'kevin.garcia@example.com', '5554567890'),
('tlee', 'hashed_password_30', 'Employee', 'Tina Lee', 'tina.lee@example.com', '5555678901'),
('yrodriguez', 'hashed_password_31', 'HR', 'Yvonne Rodriguez', 'yvonne.rodriguez@example.com', '5556789012'),
('pjackson', 'hashed_password_32', 'Director', 'Paul Jackson', 'paul.jackson@example.com', '5557890123'),
('jdoe', 'hashed_password_33', 'Employee', 'John Doe', 'john.doe@example.com', '5558902345'),
('asmith', 'hashed_password_34', 'HR', 'Alice Smith', 'alice.smith@example.com', '5559013456'),
('bjackson', 'hashed_password_35', 'Applicant', 'Ben Jackson', 'ben.jackson@example.com', '5550124567'),
('ctaylor', 'hashed_password_36', 'Employee', 'Cathy Taylor', 'cathy.taylor@example.com', '5551235678'),
('dwhite', 'hashed_password_37', 'Director', 'Diana White', 'diana.white@example.com', '5552346789'),
('efoster', 'hashed_password_38', 'Employee', 'Ethan Foster', 'ethan.foster@example.com', '5553457890'),
('jking', 'hashed_password_39', 'HR', 'Julia King', 'julia.king@example.com', '5554568901'),
('hmoore', 'hashed_password_40', 'Applicant', 'Henry Moore', 'henry.moore@example.com', '5555679012'),
('lroberts', 'hashed_password_41', 'Employee', 'Laura Roberts', 'laura.roberts@example.com', '5556780123'),
('mlewis', 'hashed_password_42', 'Employee', 'Michael Lewis', 'michael.lewis@example.com', '5557891234'),
('nthomas', 'hashed_password_43', 'HR', 'Nancy Thomas', 'nancy.thomas@example.com', '5558902345'),
('opatel', 'hashed_password_44', 'Director', 'Omar Patel', 'omar.patel@example.com', '5559013456'),
('pwhite', 'hashed_password_45', 'Employee', 'Peter White', 'peter.white@example.com', '5550124567'),
('qlee', 'hashed_password_46', 'Employee', 'Quinn Lee', 'quinn.lee@example.com', '5551235678'),
('rblack', 'hashed_password_47', 'HR', 'Rachel Black', 'rachel.black@example.com', '5552346789'),
('sjackson', 'hashed_password_48', 'Applicant', 'Sam Jackson', 'sam.jackson@example.com', '5553457890'),
('tadams', 'hashed_password_49', 'Employee', 'Tom Adams', 'tom.adams@example.com', '5554568901'),
('uallen', 'hashed_password_50', 'Director', 'Ursula Allen', 'ursula.allen@example.com', '5555679012');





truncate table users;

select * from users
delete from users

select * from users
select * from available_emps
select * from certifications
select * from director_requirements

insert into director_requirements values (
1,1,'12'
);

select * from project_deets
select * from applications


select * from users

delete from users


INSERT INTO available_emps (emp_id, skill) VALUES (1, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (2, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (3, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (4, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (5, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (6, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (7, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (8, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (9, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (10, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (11, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (12, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (13, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (14, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (15, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (16, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (17, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (18, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (19, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (20, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (21, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (22, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (23, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (24, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (25, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (26, 'Frontend');
INSERT INTO available_emps (emp_id, skill) VALUES (27, 'Backend');
INSERT INTO available_emps (emp_id, skill) VALUES (28, 'Database');
INSERT INTO available_emps (emp_id, skill) VALUES (29, 'Cloud');
INSERT INTO available_emps (emp_id, skill) VALUES (30, 'Frontend');


INSERT INTO available_emps (emp_id, skill) VALUES (31, 'Fullstack');
INSERT INTO available_emps (emp_id, skill) VALUES (32, 'Fullstack');
INSERT INTO available_emps (emp_id, skill) VALUES (33, 'Fullstack');



select count(*) from available_emps where skill='Database';

select * from available_emps

select * from 
select * from director_requirements

insert into director_requirements values(
2, 'abcd')

select * from 


select * from available_emps

insert into project_deets values(
1, 1, 'mem1, m1m2'
);


drop table director_requirements;

CREATE TABLE director_requirements (
    req_id INT identity PRIMARY KEY,
    dir_id INT,
	project_id int,
    requirements VARCHAR(255) NOT NULL,
    CONSTRAINT fk_dir_id1 FOREIGN KEY (dir_id)
    REFERENCES users(user_id)
);

select * from director_requirements;

insert into director_requirements(dir_id,project_id,requirements) values(

1,2,'asb'
);




create table project_deets(

project_id int primary key,
director_id int,
members varchar(255)
constraint fk_dir_id foreign key (director_id)
references users(user_id)
);






DECLARE @sql NVARCHAR(MAX) = '';

-- Cursor to loop through all tables
DECLARE cur CURSOR FOR
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';

OPEN cur;
FETCH NEXT FROM cur INTO @tableName;

WHILE @@FETCH_STATUS = 0
BEGIN
    SET @sql += 'TRUNCATE TABLE ' + QUOTENAME(@tableName) + '; ';
    FETCH NEXT FROM cur INTO @tableName;
END

CLOSE cur;
DEALLOCATE cur;

-- Execute the generated TRUNCATE statements
EXEC sp_executesql @sql;














delete from users

select * from sys.tables
truncate table certifications

select * from users





delete from users


INSERT INTO users VALUES
('kjones', 'hashed_password_1', 'Employee', 'Katherine Jones', 'katherine.jones@example.com', '5551110001'),
('mroberts', 'hashed_password_2', 'HR', 'Michael Roberts', 'michael.roberts@example.com', '5551110002'),
('bthompson', 'hashed_password_3', 'Employee', 'Barbara Thompson', 'barbara.thompson@example.com', '5551110003'),
('dgarcia', 'hashed_password_4', 'Director', 'David Garcia', 'david.garcia@example.com', '5551110004'),
('rhernandez', 'hashed_password_5', 'Employee', 'Rosa Hernandez', 'rosa.hernandez@example.com', '5551110005'),
('jmartinez', 'hashed_password_6', 'HR', 'James Martinez', 'james.martinez@example.com', '5551110006'),
('llee', 'hashed_password_7', 'Applicant', 'Linda Lee', 'linda.lee@example.com', '5551110007'),
('cwhite', 'hashed_password_8', 'Employee', 'Charlie White', 'charlie.white@example.com', '5551110008'),
('tmoore', 'hashed_password_9', 'Employee', 'Tom Moore', 'tom.moore@example.com', '5551110009'),
('vjackson1', 'hashed_password_10', 'HR', 'Victoria Jackson', 'victoria.jackson1@example.com', '5551110010'),
('sclark', 'hashed_password_11', 'Employee', 'Steven Clark', 'steven.clark@example.com', '5551110011'),
('pwilson', 'hashed_password_12', 'Director', 'Patricia Wilson', 'patricia.wilson@example.com', '5551110012'),
('dmoore', 'hashed_password_13', 'Employee', 'Daniel Moore', 'daniel.moore@example.com', '5551110013'),
('ajones', 'hashed_password_14', 'HR', 'Alice Jones', 'alice.jones@example.com', '5551110014'),
('slopez', 'hashed_password_15', 'Applicant', 'Samantha Lopez', 'samantha.lopez@example.com', '5551110015'),
('rsmith', 'hashed_password_16', 'Employee', 'Robert Smith', 'robert.smith@example.com', '5551110016'),
('cjohnson', 'hashed_password_17', 'Employee', 'Cynthia Johnson', 'cynthia.johnson@example.com', '5551110017'),
('jthomas', 'hashed_password_18', 'HR', 'John Thomas', 'john.thomas@example.com', '5551110018'),
('bmiller', 'hashed_password_19', 'Director', 'Betty Miller', 'betty.miller@example.com', '5551110019'),
('ahall', 'hashed_password_20', 'Employee', 'Anna Hall', 'anna.hall@example.com', '5551110020'),
('dking', 'hashed_password_21', 'Employee', 'David King', 'david.king@example.com', '5551110021'),
('jwright', 'hashed_password_22', 'HR', 'Jane Wright', 'jane.wright@example.com', '5551110022'),
('mbrown', 'hashed_password_23', 'Applicant', 'Mark Brown', 'mark.brown@example.com', '5551110023'),
('kgarcia', 'hashed_password_24', 'Employee', 'Kevin Garcia', 'kevin.garcia@example.com', '5551110024'),
('tlee', 'hashed_password_25', 'Employee', 'Tina Lee', 'tina.lee@example.com', '5551110025'),
('yrodriguez', 'hashed_password_26', 'HR', 'Yvonne Rodriguez', 'yvonne.rodriguez@example.com', '5551110026'),
('pjackson', 'hashed_password_27', 'Director', 'Paul Jackson', 'paul.jackson@example.com', '5551110027'),
('jdoe', 'hashed_password_28', 'Employee', 'John Doe', 'john.doe@example.com', '5551110028'),
('asmith', 'hashed_password_29', 'HR', 'Alice Smith', 'alice.smith@example.com', '5551110029'),
('bjackson', 'hashed_password_30', 'Applicant', 'Ben Jackson', 'ben.jackson@example.com', '5551110030'),
('ctaylor', 'hashed_password_31', 'Employee', 'Cathy Taylor', 'cathy.taylor@example.com', '5551110031'),
('dwhite', 'hashed_password_32', 'Director', 'Diana White', 'diana.white@example.com', '5551110032'),
('efoster', 'hashed_password_33', 'Employee', 'Ethan Foster', 'ethan.foster@example.com', '5551110033'),
('jking', 'hashed_password_34', 'HR', 'Julia King', 'julia.king@example.com', '5551110034'),
('hmoore', 'hashed_password_35', 'Applicant', 'Henry Moore', 'henry.moore@example.com', '5551110035'),
('lroberts', 'hashed_password_36', 'Employee', 'Laura Roberts', 'laura.roberts@example.com', '5551110036'),
('mlewis', 'hashed_password_37', 'Employee', 'Michael Lewis', 'michael.lewis@example.com', '5551110037'),
('nthomas', 'hashed_password_38', 'HR', 'Nancy Thomas', 'nancy.thomas@example.com', '5551110038'),
('opatel', 'hashed_password_39', 'Director', 'Omar Patel', 'omar.patel@example.com', '5551110039'),
('pwhite', 'hashed_password_40', 'Employee', 'Peter White', 'peter.white@example.com', '5551110040'),
('qlee', 'hashed_password_41', 'Employee', 'Quinn Lee', 'quinn.lee@example.com', '5551110041'),
('rblack', 'hashed_password_42', 'HR', 'Rachel Black', 'rachel.black@example.com', '5551110042'),
('sjackson', 'hashed_password_43', 'Applicant', 'Sam Jackson', 'sam.jackson@example.com', '5551110043'),
('tadams', 'hashed_password_44', 'Employee', 'Tom Adams', 'tom.adams@example.com', '5551110044'),
('uallen', 'hashed_password_45', 'Director', 'Ursula Allen', 'ursula.allen@example.com', '5551110045'),
('wkim', 'hashed_password_46', 'Employee', 'Will Kim', 'will.kim@example.com', '5551110046'),
('xyang', 'hashed_password_47', 'Applicant', 'Xena Yang', 'xena.yang@example.com', '5551110047'),
('zsmith', 'hashed_password_48', 'HR', 'Zach Smith', 'zach.smith@example.com', '5551110048'),
('cnguyen', 'hashed_password_49', 'Employee', 'Chris Nguyen', 'chris.nguyen@example.com', '5551110049'),
('jpatel', 'hashed_password_50', 'HR', 'Jasmine Patel', 'jasmine.patel@example.com', '5551110050');





select * from director_requirements

update director_requirements
set approved = 0
where approved=1;

delete from project_deets

ALTER TABLE director_requirements
ADD approved BIT DEFAULT 0;

delete from director_requirements where req_id = 19
select * from available_emps


delete from available_emps
