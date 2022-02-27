// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const GenerateMD = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    "Enter project title:",
    "Enter a description:",
    "Enter installation instructions",
    "Enter Usage instructions",
    "Enter contribution guidelines",
    "Enter test guidelines",
    "Select a license",
    "Enter any questions you have",
    "What is your Github username",
    'Enter Email:'

];

//array of licenses
const licenses = [
    'MIT',
    'LIC',
    'ETA'
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: questions[0],
           validate: nameInput => { // ensure a project title is entered
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter a title for your project!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'description',
           message: questions[1],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter a description for your project!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'installation',
           message: questions[2],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter installation instructions for your project!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'usage',
           message: questions[3],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter usage information for your project!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'contribution',
           message: questions[4],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter information on how to contribute!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'test',
           message: questions[5],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter test instructions!');
                 return false;
              }
          }
        },
        {
           type: 'list',
           name: 'license',
           message: questions[6],
           choices: licenses,
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please select a license!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'questions',
           message: questions[7],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please select a license!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'github',
           message: questions[8],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter GitHub username!');
                 return false;
              }
          }
        },
        {
           type: 'input',
           name: 'email',
           message: questions[9],
           validate: nameInput => {
              if (nameInput) {
                 return true;
              } else {
                 console.log('Please enter email!');
                 return false;
              }
          }
        },
     ])
    
};




function writeToFile(data){
    return new Promise((resolve,reject)=>{
      // provides ability to write the markdown code template to a file
      fs.writeFile('./dist/README.md', data, err => {
        // if theres an error, reject the Promise and send the error to the Promises `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesnt accidentally execute the resolve() function as well
          return;
        }
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message:'README.md created!'
        });
     });
    });
  };


// Function call to initialize app
init()
.then(data=> {return GenerateMD(data)})
.then(markdownContent=>writeToFile(markdownContent));


