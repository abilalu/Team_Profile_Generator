// Employee test
const Employee = require ('../lib/Employee');

//to validate name,email,id,role 

const employeeTest = new Employee ("Abi", "abilalu1994@gmail.com", 2 , "Employee");


describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an email id', () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role of employee', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})