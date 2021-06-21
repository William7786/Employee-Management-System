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
const All = () => {
    connection.query("SELECT * From employees", (err, res) =>{
        console.table(res)
    })
}
const Departments = () => {
connection.query("SELECT * From department",(err, res) => {
    console.table(res)
})

}
const Roles = () => {
connection.query("SELECT * From roles")
console.table(res)
}

const addE = () => {
    inquirer.prompt([
        {
            message: "What is the first name of the employee?",
            type: "input",
            name: "firstN"
        },
        {
            message: "What is the last name of the employee?",
            type: "input",
            name: "lastN"
        },
        {
            message: "What is the employees role?",
            type: "input",
            name: "role"
        },
    ])
    .then((answer) => {

    })
}

const addD = () => {
inquirer.prompt([
    {
    message: "What is the department name?",
    type: "input",
    name:"departmentN"
    },
    
]).then((answer) => {
    "INSERT INTO department SET",
    {
        name: answer.departmentN
    }
})
}

const addR = () => {

}

const removeE = () => {

}





connection.connect((error)=>{
    Start();
})
