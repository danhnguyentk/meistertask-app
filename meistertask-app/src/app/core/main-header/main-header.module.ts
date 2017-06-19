import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHeaderComponent } from './main-header.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { DropdownUserComponent } from './components/dropdown-user/dropdown-user.component';

const COMPONENTS: any[] = [
    MainHeaderComponent,
    NavbarAuthComponent,
    DropdownUserComponent
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
export class MainHeaderModule { }
