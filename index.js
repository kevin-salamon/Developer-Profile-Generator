let inquirer = require('inquirer');
let fs = require('fs');
let axios = require('axios');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    }
  ])
  .then(function(response) {

    fs.writeFile("log.txt", JSON.stringify(response), function(err) {
        var username = response.username;

        let queryURL = "https://api.github.com/search/users?q=" + username;
        console.log(queryURL);

        // axios.get(queryURL)
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    });

  });



