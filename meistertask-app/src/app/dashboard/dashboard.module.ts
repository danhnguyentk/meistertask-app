import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectListEffects } from './effects/project-list.effects';
import { ProjectListActions } from './actions/project-list.actions';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectPanelComponent } from './components/project-panel/project-panel.component';

const COMPONENTS: any[] = [
    DashboardComponent,
    ProjectListComponent,
    ProjectPanelComponent
];

const MODULES: any[] = [
    EffectsModule.run(ProjectListEffects),
    SharedModule
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
        ...COMPONENTS,
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class DashboardModule { }
