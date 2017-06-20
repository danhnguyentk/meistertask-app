import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../core/shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { SearchTaskModalModule } from '../core/search-task-modal/search-task-modal.module';
import { FormModule } from '../core/form/form.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ProjectModule } from '../project/project.module';
import { TaskModule } from '../task/task.module';

const COMPONENTS: any[] = [
    DashboardComponent,
    DashboardHeaderComponent
];

const MODULES: any[] = [
    SharedModule,
    ProjectModule,
    TaskModule,
    AuthModule,
    FormModule,
    SearchTaskModalModule,
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
