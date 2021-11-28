import { users } from "../data/users.js"
import DataError from "../models/dataError.js"


export default class UserService{
    constructor(loggerService) {
        this.errors=[]
        this.loggerService = loggerService
        this.users=[]
    }   
    add(user) {           
        
        this.loggerService.log(user)
    }
    getAll() {
        return this.users;
    }
    getById(id) {
        return this.users.find(user=>user.id===id)
    }
   
    

}