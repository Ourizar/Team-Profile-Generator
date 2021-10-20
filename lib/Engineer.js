const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;

    }
    getRole(){
        // const engineer = JSON.stringify(Engineer);
        return 'Engineer';
        // return engineer;
    }

    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;