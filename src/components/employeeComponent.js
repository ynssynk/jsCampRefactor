import { MongoLogger } from "../crossCuttingConcerns/logging/mongoLogger";
import Employee from '../models/employee.js'
import { EmployeeService } from "../services/employeeService.js";



console.log("Employee component yüklendi");

let logger = new MongoLogger()
let employeeService = new EmployeeService(logger)

console.log(employeeService.getAll());

let employee = new Employee(1, "Yunus", "Yanık", "Sakarya", "sdsd28", 3000)
employee.type = "employee"
employeeService.add(employee)

console.log(employeeService.errors)
