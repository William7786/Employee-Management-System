// const Table = require ("console.table");
const inquirer = require ("inquirer");
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
    "Veiw All Departments",
    "Veiw All Roles",
    "Add Employee",
    "Add Department",
    "Add Role",
    "Remove Employee",
    "Done"
],
}) .then((answer)=>{
    
})
}

connection.connect((error)=>{
    Start();
})