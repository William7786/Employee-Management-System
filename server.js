// const Table = require ("console.table");
const inquirer = require ("inquirer");
const ConfirmPrompt = require("inquirer/lib/prompts/confirm");
const mysql = require ("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database:"employee_DB"
})
const Start = () => {
inquirer.prompt({
    name: "start",
    type: "list",
    message: "What would you like to get done today?",
    choices:[
    "View Employees", 
    "Veiw Departments",
    "Veiw Roles",
    "Add Employee",
    "Add Department",
    "Add Role",
    "Remove Employee",
    "Done"
],
}) .then((answer)=>{
    if (answer.start === "Veiw Employees"){
        All()
    }else if (answer.start === "Veiw Roles"){
        Roles()
    }else if(answer.start === "Veiw Department"){
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

connection.connect((error)=>{
    Start();
})