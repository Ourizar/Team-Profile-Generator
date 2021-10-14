const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const renderHtml = require('./src/template')
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/intern');
const Employee = require("./lib/Employee");
const employeeArr = [];

const outputDirectory = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDirectory, 'team.html');

 const createManager = () => {
     inquirer.prompt([
         {
             type: 'input',
             message: 'What is the team managers name?',
             name: 'managerName',
         },
         {
            type: 'input',
            message: 'What is the team managers id?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is the team managers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the team managers office Number?',
            name: 'managerOfficeNumber',
        },

     ]).then(resp => {
         const manager = new Manager(resp.managerName, resp.managerId, resp.email, resp.managerOfficeNumber);
         employeeArr.push(manager);
         addEmployee();
     })
 }  

 const createEngineer  = () => {
     inquirer.prompt([
         {
             type: 'input',
             message: "What is the Engineer's name?",
             name: 'engineerName',
         },
         {
             type: 'input',
             message: 'What is their id?',
             name: 'engineerId',
         },
         {
             type: 'input',
             message: 'What is their email?',
             name: 'engineerEmail',
         },
         {
             type: 'input',
             message: 'What is their GitHub username?',
             name: 'engineerGitHub',
         },

     ]).then(resp =>{
         const engineer = new Engineer(resp.engineerName, resp.engineerId, resp.engineerEmail, resp.engineerGitHub );
         employeeArr.push(engineer);
         addEmployee();
     })
 }

 const createIntern = () => {
     inquirer.prompt([
         {
             type: 'input',
             message: "What is the Intern's name?",
             name: 'internName',
         },
         {
             type: 'input',
             message: 'What is their employee id?',
             name: 'internId',
         },
         {
             type: 'input',
             message: 'What is their email?',
             name: 'internEmail',
         },
         {
             type: 'input',
             message: 'What is their school name?',
             name: 'internSchool',
         },

     ]).then(resp =>{
         const intern = new Intern(resp.internName, resp.internId, resp.internEmail, resp.internSchool);
         employeeArr.push(intern);
         addEmployee();

     })
 }

 const renderTeam = () => {
     if(!fs.existsSync(outputDirectory)){
         fs.mkdirSync(outputDirectory);

     }

     fs.writeFileSync(outputPath, renderHtml(employeeArr), 'utf-8');

 }

 const addEmployee = () => {
     inquirer.prompt([
         {
             type:'list',
             message: 'What kind of Employee do you want to create?',
             choices: ['Engineer', 'Intern', "I don't want to add anymore employees."],
             name: 'employeeType',
         }
     ]).then(resp =>{
         switch(resp.employeeType){
             case 'Engineer':
                 createEngineer();
                 break;
            case 'Intern':
                createIntern();
                break;
            case "I don't want to add anymore employees.":
                renderTeam();
                break;
         }
     })


 }

createManager();
// createEngineer();
// createIntern();

