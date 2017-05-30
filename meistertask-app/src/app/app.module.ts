import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

const MODULES = [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CoreModule,
    SharedModule,
    HomeModule
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ...MODULES
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
