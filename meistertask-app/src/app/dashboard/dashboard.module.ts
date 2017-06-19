import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../core/shared/shared.module';
import { MainHeaderModule } from '../core/main-header/main-header.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { SearchTaskModalModule } from '../core/search-task-modal/search-task-modal.module';
import { FormModule } from '../core/form/form.module';
import { ProjectListEffects } from './effects/project-list.effects';
import { ProjectListActions } from './actions/project-list.actions';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectPanelComponent } from './components/project-panel/project-panel.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

const COMPONENTS: any[] = [
    DashboardComponent,
    ProjectListComponent,
    ProjectPanelComponent,
    DashboardHeaderComponent
];

const MODULES: any[] = [
    EffectsModule.run(ProjectListEffects),
    SharedModule,
    MainHeaderModule,
    FormModule,
    SearchTaskModalModule,
    LoadingIndicatorModule
];

const SERVICES: any[] = [
    ProjectService,
    ProjectListActions
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
