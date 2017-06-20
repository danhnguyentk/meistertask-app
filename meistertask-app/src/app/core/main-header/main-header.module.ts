import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHeaderComponent } from './main-header.component';
import { AuthModule } from '../../auth/auth.module';

const COMPONENTS: any[] = [
    MainHeaderComponent
];

const MODULES: any[] = [
    CommonModule,
    AuthModule
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
export class MainHeaderModule { }
