import { BaseLogger } from "./logger.js";

export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic" + data);
    }
}
