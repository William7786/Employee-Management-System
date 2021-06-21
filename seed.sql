DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE employee (
-- id INT PRIMARY KEY,
first_name VARCHAR (30) ,
last_name VARCHAR (30) NULL,
role_id INT (10) NULL, 
manager_id INT (10) NULL
);
CREATE TABLE roles (
-- id INT PRIMARY KEY,
title VARCHAR (30) NULL,
salary DECIMAL NULL, 
department_id INTEGER (100)NULL
);
CREATE TABLE DEPARTMENT (
id INT PRIMARY KEY,
name VARCHAR (30) NULL
);
INSERT into employee (first_name, last_name, role_id, manager_id)
VALUE ("George", "Jhonson", 1, null),("Bob", "Renalds", 2, 1),("Eduardo", "George", 1, 0),("William", "Newton", 2, 1);
INSERT into roles (title, salary, department_id)
VALUE ("Engineer", 100000.00, 1), ("Advertizing", 75000.00, 1), ("Sales Lead", 60000.00, 1),("Accountant", 80000.00, 1);