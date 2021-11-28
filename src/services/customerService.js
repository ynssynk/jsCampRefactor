import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import UserService from "./userService.js";

export  class CustomerService extends UserService{
    constructor(loggerService) {        
        super(loggerService)
        this.customers = users.filter(user => user.type === "customer")
        this.errors = []
        this.rules = []
        
    }
        
    add(customer) {
        
         this.rules.push(this.checkCustomerType(customer))
         this.rules.push(this.checkCustomerValidityForErrors(customer))
         this.rules.push(this.checkCustomerAge(customer))

        for (const rule of this.rules) {
            if (!rule) {
                console.log("Yanlış giden bir şeyler var. Girdiğiniz bilgileri kontrol ediniz.")
                return;
            }
        }
        this.customers.push(customer)
        console.log("added");
        this.loggerService.log(customer)
    }
    getAll() {
        
        return this.customers
    }
    getById(id) {
        return this.customers.find(customer => customer.id === id);
    }
    
    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
    checkCustomerValidityForErrors(customer) {
        let requiredFields = "id firstName lastName age city".split(" ");
        let hasErrors=true
        for (const field of requiredFields) {
            
            if (!customer[field]) {
                hasErrors = false

                this.errors.push(new DataError(`Validation problem  ${field} is required`, customer))
               
            }
        }
        return hasErrors
    }
    checkCustomerAge(customer) {
        let hasErrors=true
        if (Number.isNaN(Number.parseInt(customer.age))) {
            hasErrors=false
            this.errors.push(new DataError(`Validation problem  ${customer.age} is not a number`,customer))
        }
        return hasErrors
    }
    
    checkCustomerType(customer) {
        let hasErrors = true
        if (customer.type!=="customer") {
            hasErrors =false
        }
        return hasErrors
    }
    
}