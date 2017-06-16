import { NgModule } from '@angular/core';

import { PrimaryLayoutComponent } from './primary-layout.component';
import { SecondaryLayoutComponent } from './secondary-layout.component';
import { MainFooterComponent } from './main-footer.component';
import { MainHeaderComponent } from './main-header.component';
import { SharedModule } from '../core/shared/shared.module';

const COMPONENTS: any[] = [
    MainFooterComponent,
    MainHeaderComponent,
    PrimaryLayoutComponent,
    SecondaryLayoutComponent
];

const MODULES: any[] = [
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
export class LayoutModule { }
