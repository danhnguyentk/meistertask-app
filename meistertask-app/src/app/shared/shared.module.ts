import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { PrimaryLayoutComponent } from './components/primary-layout/primary-layout.component';
import { SecondaryLayoutComponent } from './components/secondary-layout/secondary-layout.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { ControlMessageComponent } from './components/control-message/control-message.component';

const COMPONENTS = [
    MainHeaderComponent,
    MainFooterComponent,
    MainBodyComponent,
    PrimaryLayoutComponent,
    SecondaryLayoutComponent,
    ControlMessageComponent
]

const COMMON_MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
];

@NgModule({
    imports: [
        ...COMMON_MODULES
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS,
        ...COMMON_MODULES
    ]
})
export class SharedModule { }
