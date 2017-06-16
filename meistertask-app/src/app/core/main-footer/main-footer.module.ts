import { NgModule } from '@angular/core';

import { MainFooterComponent } from './components/main-footer/main-footer.component';

const COMPONENTS: any[] = [
    MainFooterComponent
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
export class MainFooterModule { }
