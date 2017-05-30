import { NgModule } from '@angular/core';
import { AppConfig } from './app-config.service';
import { HttpWrapperService } from './http-wrapper.service';
import { LocalStorageService } from './local-storage.service';
import { ValidationMessageService } from './validation-message.service';
import { CustomValidatorService } from './custom-validator.service';
import { Logger } from './logger.service';

export const CORE_PROVIDER: any[] = [
    AppConfig,
    HttpWrapperService,
    LocalStorageService,
    Logger,
    ValidationMessageService,
    CustomValidatorService
];

@NgModule({
    providers: [
        ...CORE_PROVIDER
    ]
})
export class CoreModule { }
