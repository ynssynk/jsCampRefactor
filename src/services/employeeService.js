import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import UserService from "./userService.js";

export  class EmployeeService extends UserService{
    
    constructor(loggerService) {
        super(loggerService)
        this.employees = users.filter(user => user.type === "employee")
        this.errors = []
        this.rules = []
        
    }
    getAll() {
        return this.employees
    }
    getById(id) {
        return this.users.find(employee => employee.id === id);
    }
    add(employee) {
        this.rules.push(this.checkEmployeeValidityForErrors(employee));
        this.rules.push(this.checkEmployeeAge(employee));
        for (const rule of this.rules) {
            if (!rule) {
                console.log("Yanlış giden bir şeyler var. Girdiğiniz bilgileri kontrol ediniz.")
                return;
            }
        }
        this.employees.push(employee)
    }
    checkEmployeeValidityForErrors(employee) {
        let requiredFields = "id firstName lastName age city salary".split(" ");
        let hasErrors=true
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors=false
                this.errors.push(new DataError(`Validation problem  ${field} is required`,employee))
            }
        }        
        return hasErrors
    }
    checkEmployeeAge(employee) {
        let hasErrors=true
        if (Number.isNaN(Number.parseInt(employee.age))) {
            hasErrors=false
            this.errors.push(new DataError(`Validation problem  ${employee.age} is not a number`,employee))
        }
        return hasErrors
    }
}