import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppConfig } from './services/app-config.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { LocalStorageService } from './services/local-storage.service';
import { ValidationMessage } from './services/validation-message.service';
import { CustomValidator } from './services/custom-validator.service';
import { Logger } from './services/logger.service';

const MODULES = [
    HttpModule
];

const PIPES = [
];

const DIRECTIVES = [
];

const COMPONENTS: any[] = [
];

const SERVICES: any[] = [
    AppConfig,
    HttpWrapperService,
    LocalStorageService,
    Logger,
    ValidationMessage,
    CustomValidator
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS,
        ...PIPES,
        ...DIRECTIVES
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS,
        ...PIPES,
        ...DIRECTIVES,
    ]
})
export class CommonModule { }
