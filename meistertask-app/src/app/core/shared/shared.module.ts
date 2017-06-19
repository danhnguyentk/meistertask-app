import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule } from 'ngx-dropdown';
import { ModalModule } from 'ngx-modal';
import { DndModule } from 'ng2-dnd';

import { AppConfig } from './services/app-config.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { LocalStorageService } from './services/local-storage.service';
import { ValidationMessage } from './services/validation-message.service';
import { CustomValidator } from './services/custom-validator.service';
import { Logger } from './services/logger.service';
import { ErrorActions } from './actions/error.actions';


const MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DropdownModule,
    ModalModule
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
    CustomValidator,
    ErrorActions
];

@NgModule({
    imports: [
        ...MODULES,
        DndModule.forRoot()
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
        ...MODULES,
        ...COMPONENTS,
        ...PIPES,
        ...DIRECTIVES,
        DndModule
    ]
})
export class SharedModule { }
