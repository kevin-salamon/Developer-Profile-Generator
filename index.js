let inquirer = require('inquirer');
let fs = require('fs');
let axios = require('axios');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GITHUB user name?",
      default: "kevin-salamon",
      name: "username"
    },
    {
      type: "input",
      message: "This program will now create a README for your project. Kindly enter the name of the project here.",
      default: "README Generator",
      name: "title"
    },
    {
      type: "input",
      message: "Please enter a description for your project.",
      default: "A command line interface used to generate READMEs.",
      name: "description"
    },
    {
      type: "checkbox",
      message: "Choose the dependencies / installations you will require within your project.",
      choices: ["FS", "Inquirer", "Axios"],
      name: "installations"
    },
    {
      type: "input",
      message: "Please enter the usage of the project.",
      default: "Answer the prompts within the command line interface to generate READMEs for any given project.",
      name: "usage"
    },
    {
      type: "input",
      message: "Please enter additional contributors.",
      default: "Kevin",
      name: "contributors"
    },
    {
      type: "list",
      message: "Please enter the licensing that will be used.",
      choices: ["ISC", "MIT", "APACHE", "BSD", "NPM"],
      name: "license"
    },
    {
      type: "input",
      message: "Please enter the testing method",
      default: "npm test",
      name: "test"
    },
    {
      type: "input",
      message: "Please enter your email for future contact by users",
      name: "email",
      default: "theksalamon@gmail.com"
    }
  ])
  .then(function(response) {
    console.log("Success!");
    var title = response.title + '\n\n\n';
    var description = response.description + '\n\n';
    var installations = response.installations + '\n\n';
    var usage = response.usage + '\n\n';
    var contributors = response.contributors + '\n\n';
    var license = response.license + '\n\n';
    var test = response.test + '\n\n\n\n\n';
    var username = response.username;
    var email = response.email;

    let queryURL = "https://api.github.com/search/users?q=" + username;

     
    fs.appendFileSync("README.md", `# ${title}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## Project Description \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `> ${description}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## Table of Contents \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `1. Installations & Dependencies \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `2. Usage \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `3. Additional Contributors \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `4. Licensing \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `5. Testing\n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });


    fs.appendFileSync("README.md", `## Installations and Dependencies \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `> ${installations}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## Usage \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `> ${usage}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## Additional Contributors \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `> ${contributors}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## License \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `* ${license}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `## Testing \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `> ${test}`, function(error) {
      if (error) {
        throw error;
      } 
    });

    fs.appendFileSync("README.md", `**To contact the creator of this program, kindly reach out at ${email}.** \n\n`, function(error) {
      if (error) {
        throw error;
      } 
    });

    axios
    .get(queryURL)
    .then(function(res) {
      var avatar = `![github profile](${res.data.items[0].avatar_url})`;

      fs.appendFileSync("README.md", avatar, function(error) {
        if (error) {
          throw error;
        }
      });
    });
    

  });



