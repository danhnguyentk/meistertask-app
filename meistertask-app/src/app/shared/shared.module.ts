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
import { EffectsModule } from '@ngrx/effects';

import { MainBodyComponent } from './components/main-body/main-body.component';
import { ControlMessageComponent } from './components/control-message/control-message.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { DropdownUserComponent } from './components/dropdown-user/dropdown-user.component';
import { DropdownAssignComponent } from './components/dropdown-assign/dropdown-assign.component';
import { FilterProjectPipe } from './pipes/filter-project.pipe';
import { DropdownAddTaskComponent } from './components/dropdown-add-task/dropdown-add-task.component';
import { SearchTaskModalComponent } from './components/search-task-modal/search-task-modal.component';
import { FocusDirective } from './directives/focus.directive';
import { ErrorActions } from './actions/error.actions';
import { SearchActions } from './actions/search.actions';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { SearchEffects } from './effects/search.effects';

const COMPONENTS = [
    MainBodyComponent,
    ControlMessageComponent,
    ErrorMessageComponent,
    NavbarAuthComponent,
    DropdownUserComponent,
    DropdownAssignComponent,
    DropdownAddTaskComponent,
    SearchTaskModalComponent,
    IndicatorComponent
];

const COMMON_MODULES = [
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

const SERVICES = [
    ErrorActions,
    SearchActions
];

// Fixme
@NgModule({
    imports: [
        ...COMMON_MODULES,
        DndModule.forRoot(),
        EffectsModule.run(SearchEffects)
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
        ...COMMON_MODULES,
        ...DIRECTIVES,
        DndModule
    ]
})
export class SharedModule { }
