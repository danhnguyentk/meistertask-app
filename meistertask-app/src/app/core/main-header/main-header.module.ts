import { NgModule } from '@angular/core';

import { MainHeaderComponent } from './main-header.component';

const COMPONENTS: any[] = [
    MainHeaderComponent
];

const MODULES: any[] = [
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
