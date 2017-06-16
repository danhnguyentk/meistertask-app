import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ControlMessageComponent } from './components/control-message/control-message.component';

const COMPONENTS: any[] = [
    ErrorMessageComponent,
    ControlMessageComponent
];

const MODULES: any[] = [
    CommonModule,
    SharedModule
];

const SERVICES: any[] = [
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class FormModule { }
