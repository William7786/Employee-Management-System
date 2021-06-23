const table = require ("console.table");
const inquirer = require ("inquirer");
// const ConfirmPrompt = require("inquirer/lib/prompts/confirm");
const mysql = require ("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database:"employee_db"
})
const Start = () => {
inquirer.prompt({
    name: "start",
    type: "list",
    message: "What would you like to get done today?",
    choices:[
    "View Employees", 
    "View Departments",
    "View Roles",
    "Add Employee",
    "Add Department",
    "Add Role",
    "Remove Employee",
    "Done"
],
}) .then((answer)=>{
    if (answer.start === "View Employees"){
        All()
    }else if (answer.start === "View Roles"){
        Roles()
    }else if(answer.start === "View Departments"){
        Departments()
    }else if (answer.start === "Add Employee"){
        addE()
    }else if (answer.start === "Add Department"){
        addD()
    }else if (answer.start === "Add Role"){
        addR()
    }else if (answer.start === "Remove Employee"){
        removeE()
    }else{
        connection.end();
    }
})
}
const All = () => {
    connection.query("SELECT * FROM employee", (err, res) =>{
        if(err){
            console.log(err);
        }
        // console.log(`Name: ${employee.first_name}${employee.last_name}|Role Id: ${employee.role_id}|Manager id:${employee.manager_id}`);
        console.log("All Employees")
        console.table(res)
        
        next()
    })

}



const Departments = () => {
connection.query("SELECT * From department",(err, res) => {
    console.log("ALL Departments")
    console.table(res)
    next()
})

}
const Roles = () => {
connection.query("SELECT * From roles", (err, res) => {
 console.log("All Roles")
 console.table(res)
 
 next() 
})
}

const next = () =>{
    inquirer.prompt({
         type: "list",
         name: "continue",
         message: "Would you like to continue?",
         choices: ["yes","no"],
     }).then((answer)=>{
     if (answer.continue=== "yes"){
     Start()
     } else { connection.end();
     }}
 )}

const addE = () => {
    inquirer.prompt([
        {
            message: "What is the first name of the employee?",
            type: "input",
            name: "first_name"
        },
        {
            message: "What is the last name of the employee?",
            type: "input",
            name: "last_name"
        },
        {
            message: "What is the employees role?",
            type: "input",
            name: "role_id"
        }, 
        {
            message: "What is the employees manager id?",
            type: "input",
            name: "manager_id"
        },
    ])
    .then((answer) => {
        connection.query(
            "INSERT INTO employee SET?",
            {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        });
        console.log("Your new employee has been added to the roster!");
        
        next()
    })
    
}

const addD = () => {
inquirer.prompt([
    {
    message: "What is the department name?",
    type: "input",
    name:"Dname"
    },
    
]).then((answer) => {
    connection.query(
    "INSERT INTO department SET ?",
    {
        Dname: answer.Dname
    })
    console.log ("Your New department has been added!!!"),
    next()
    
}); 
}

const addR = () => {
inquirer.prompt([
    {   
        message: "What is the new role?",
        type: "input",
        name:"rName"

    },
    {
        message: "What is this roles salary?",
        type:"input",
        name: "rSalary"
    },
    {
        message: "What is the role department ID",
        type:"input",
        name:"rDepartment"
    }
]).then((answer) => {
    connection.query(
    "INSERT INTO roles SET ?",
   {
    title: answer.rName,
    salary: answer.rSalary,
    department_id: answer.rDepartment,

   })
   console.log("Your new role has been added!!!"),
   next()
})
}

const removeE = () => {

}





connection.connect((error)=>{
    Start();
})
