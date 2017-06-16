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

import { DropdownAssignComponent } from './components/dropdown-assign/dropdown-assign.component';
import { DropdownAddTaskComponent } from './components/dropdown-add-task/dropdown-add-task.component';
import { DropdownUserComponent } from './components/dropdown-user/dropdown-user.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { AppConfig } from './services/app-config.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { LocalStorageService } from './services/local-storage.service';
import { ValidationMessage } from './services/validation-message.service';
import { CustomValidator } from './services/custom-validator.service';
import { Logger } from './services/logger.service';
import { FocusDirective } from './directives/focus.directive';
import { FilterProjectPipe } from './pipes/filter-project.pipe';
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
    FilterProjectPipe
];

const DIRECTIVES = [
    FocusDirective
];

const COMPONENTS: any[] = [
    DropdownAssignComponent,
    DropdownAddTaskComponent,
    DropdownUserComponent,
    NavbarAuthComponent
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
