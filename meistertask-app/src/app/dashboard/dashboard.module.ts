import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectEffects } from './effects/project.effects';
import { ProjectActions } from './actions/project.actions';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectPanelComponent } from './components/project-panel/project-panel.component';

const COMPONENTS: any[] = [
    DashboardComponent,
    ProjectListComponent,
    ProjectPanelComponent
];

const MODULES: any[] = [
    EffectsModule.run(ProjectEffects),
    SharedModule
];

const SERVICES: any[] = [
    ProjectService,
    ProjectActions
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
