// Creating the code to define and export the Engineer class

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Engineer'
    }   
    getGithub() {
        return this.github
    }  
}

module.exports = Engineer;