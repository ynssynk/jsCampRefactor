import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import { MongoLogger } from "../crossCuttingConcerns/logging/mongoLogger.js"
import { ElasticLogger } from "../crossCuttingConcerns/logging/elasticLogger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import { CustomerService } from "../services/customerService.js"

console.log("Customer component yüklendi!!!")


let logger = new ElasticLogger()
let customerService = new CustomerService(logger)
console.log(customerService.getAll());


let customer1 = new Customer(1, "Yunus", "Yanık", "Sakarya",28)
customer1.type = "customer";
customerService.add(customer1)
console.log(customerService.errors)
console.log(customerService.getById(1));