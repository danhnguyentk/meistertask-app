import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectModule } from './project/project.module';
import { reducer } from './app.reducers';
import { environment } from '../environments/environment';

const optionalImports: any = [];
if (!environment.production) {
    // Note that must import instrument after importing StoreModule
    optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
}

const MODULES: any[] = [
    RouterModule.forRoot(ROUTES),
    StoreModule.provideStore(reducer),
    ...optionalImports,
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    DashboardModule,
    ProjectModule
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
