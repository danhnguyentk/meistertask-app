import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { DropdownModule } from 'ngx-dropdown';

import { ModalModule } from '../core/modal/modal.module';
import { TaskModule } from '../task/task.module';
import { AuthModule } from '../auth/auth.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { FormModule } from '../core/form/form.module';
import { ProjectComponent } from './project.component';
import { FilterProjectPipe } from './pipes/filter-project.pipe';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectPanelComponent } from './components/project-panel/project-panel.component';
import { DropdownAssignComponent } from './components/dropdown-assign/dropdown-assign.component';
import { AssignProjectComponent } from './components/assign-project/assign-project.component';
import { ProjectListEffects } from './effects/project-list.effects';
import { ProjectListActions } from './actions/project-list.actions';
import { ProjectService } from './services/project.service';

const MODULES: any[] = [
    CommonModule,
    DropdownModule,
    RouterModule,
    EffectsModule.run(ProjectListEffects),
    ModalModule,
    AuthModule,
    FormModule,
    LoadingIndicatorModule,
    TaskModule
];

const COMPONENTS: any[] = [
    ProjectComponent,
    ProjectHeaderComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectPanelComponent,
    DropdownAssignComponent,
    AssignProjectComponent
];

const SERVICES: any[] = [
    ProjectService,
    ProjectListActions
];

const PIPES: any[] = [
    FilterProjectPipe
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS,
        ...PIPES
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS,
        ...PIPES
    ]
})
export class ProjectModule { }
