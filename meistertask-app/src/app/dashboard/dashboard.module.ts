import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { FormModule } from '../core/form/form.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ProjectModule } from '../project/project.module';
import { TaskModule } from '../task/task.module';

const COMPONENTS: any[] = [
    DashboardComponent,
    DashboardHeaderComponent
];

const MODULES: any[] = [
    CommonModule,
    ProjectModule,
    TaskModule,
    AuthModule,
    FormModule,
    LoadingIndicatorModule
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
export class DashboardModule { }
