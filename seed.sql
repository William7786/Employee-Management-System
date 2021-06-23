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
INSERT into department (id, name)
Value ("1", "Engineer")("2", "Advertizing")("3", "Sales Lead")("4", "Accountant")

SELECT e.id, e.first_name, e.last_name, roles.title, department.Dname AS Department, roles.salary, CONCAT(m.first_name, " ", m.last_name) 
AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id
JOIN roles ON e.role_id = roles.id
JOIN department ON department.id = roles.department_id;