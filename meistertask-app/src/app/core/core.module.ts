import { NgModule } from '@angular/core';
import { AppConfig } from './app-config.service';
import { HttpWrapperService } from './http-wrapper.service';
import { LocalStorageService } from './local-storage.service';
import { ValidationMessage } from './validation-message.service';
import { CustomValidator } from './custom-validator.service';
import { Logger } from './logger.service';

export const CORE_PROVIDER: any[] = [
    AppConfig,
    HttpWrapperService,
    LocalStorageService,
    Logger,
    ValidationMessage,
    CustomValidator
];

@NgModule({
    providers: [
        ...CORE_PROVIDER
    ]
})
export class CoreModule { }
