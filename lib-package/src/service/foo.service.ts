import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';


@Injectable()
export class FooService {

    constructor(
        private readonly _loggerService: LoggerService,
    ) {
    }

    foo(): void {
        this._loggerService.log('> foo');
    }

}