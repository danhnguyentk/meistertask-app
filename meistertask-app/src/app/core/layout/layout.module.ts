import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrimaryLayoutComponent } from './primary-layout.component';
import { SecondaryLayoutComponent } from './secondary-layout.component';
import { MainHeaderModule } from '../main-header/main-header.module';
import { MainFooterModule } from '../main-footer/main-footer.module';

const COMPONENTS: any[] = [
    PrimaryLayoutComponent,
    SecondaryLayoutComponent
];

const MODULES: any[] = [
    CommonModule,
    RouterModule,
    MainHeaderModule,
    MainFooterModule
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
