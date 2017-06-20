import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ControlMessageComponent } from './components/control-message/control-message.component';
import { FocusDirective } from './directives/focus.directive';
import { ErrorActions } from './actions/error.actions';

const COMPONENTS: any[] = [
    ErrorMessageComponent,
    ControlMessageComponent
];

const MODULES: any[] = [
    CommonModule,
    SharedModule
];

const DIRECTIVES: any[] = [
    FocusDirective
];

const SERVICES: any[] = [
    ErrorActions
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS,
        ...DIRECTIVES
    ]
})
export class FormModule { }
