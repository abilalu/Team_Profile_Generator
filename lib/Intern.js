const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, role, school) {
        super(name, email,id, role)
        this.school = school;
    }


    getSchool() {
        return this.school;
    }

}
// Exporting intern class

module.exports = Intern;
