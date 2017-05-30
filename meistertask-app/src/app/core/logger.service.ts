import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

export enum LogLevel {
    FATAL = 1,
    ERROR,
    WARN,
    INFO,
    DEBUG
}

@Injectable()
export class Logger {
    logLevel: LogLevel = environment.LOG_LEVEL;

    constructor() { }

    fatal(mess?: any, ...args) {
        if (this.logLevel >= LogLevel.FATAL) {
            console.log(mess, ...args);
        }
    }

    error(mess?: any, ...args) {
        if (this.logLevel >= LogLevel.ERROR) {
            console.log(mess, ...args);
        }
    }

    warn(mess?: any, ...args) {
        if (this.logLevel >= LogLevel.WARN) {
            console.log(mess, ...args);
        }
    }

    info(mess?: any, ...args) {
        if (this.logLevel >= LogLevel.INFO) {
            console.log(mess, ...args);
        }
    }

    debug(mess?: any, ...args) {
        if (this.logLevel >= LogLevel.DEBUG) {
            console.log(mess, ...args);
        }
    }
}
