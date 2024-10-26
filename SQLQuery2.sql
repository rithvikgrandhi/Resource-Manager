select * from sys.tables

create table directors(
id int identity primary key,
name varchar(255),
)
select * from project_deets

truncate table available_emps;

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


select count(*) from available_emps where skill='Database';

select * from project_deets

select * from 
select * from director_requirements

insert into director_requirements values(
2, 'abcd')

select * from 


select * from project_deets

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
