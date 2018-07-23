import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { FooService } from './foo.service';

@NgModule({
    providers: [
        LoggerService,
        FooService,
    ],
})
export class LibServicesModule {
}