import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    log(msg: string): void {
        console.log(msg);
    }

    error(msg: string): void {
        console.error(msg);
    }

    warn(msg: string): void {
        console.warn(msg);
    }

}