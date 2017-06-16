import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

const COMPONENTS: any[] = [
    LoadingIndicatorComponent
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
export class LoadingIndicatorModule { }
