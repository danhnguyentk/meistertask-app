import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule as Module } from 'ngx-modal';

import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

const COMPONENTS: any[] = [
    ConfirmModalComponent
];

const MODULES: any[] = [
    CommonModule,
    Module,
];

const DIRECTIVES: any[] = [
];

const SERVICES: any[] = [
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
        ...DIRECTIVES,
        Module
    ]
})
export class ModalModule { }
