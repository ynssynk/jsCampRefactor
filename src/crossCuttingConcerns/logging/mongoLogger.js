import { BaseLogger } from "./logger.js";

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data);
    }
}
