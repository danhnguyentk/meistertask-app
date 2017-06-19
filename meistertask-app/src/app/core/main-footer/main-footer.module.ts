import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFooterComponent } from './components/main-footer/main-footer.component';

const COMPONENTS: any[] = [
    MainFooterComponent
];

const MODULES: any[] = [
    CommonModule
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
export class MainFooterModule { }
