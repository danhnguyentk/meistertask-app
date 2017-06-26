import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorPagesComponent } from './components/error-pages/error-pages.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ ErrorPagesComponent ]
})
export class ErrorPagesModule { }
