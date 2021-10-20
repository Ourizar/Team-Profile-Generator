const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        // const manager = JSON.stringify(Manager)
        return 'Manager';
        // return manager;
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;