import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../core/shared/shared.module';
import { MainHeaderModule } from '../core/main-header/main-header.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { SearchTaskModalModule } from '../core/search-task-modal/search-task-modal.module';
import { FormModule } from '../core/form/form.module';
import { ProjectComponent } from './project.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { TaskEffects } from './effects/task.effects';
import { TaskService } from './services/task.service';
import { TaskActions } from './actions/task.actions';
import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const MODULES: any[] = [
    SharedModule,
    MainHeaderModule,
    FormModule,
    SearchTaskModalModule,
    LoadingIndicatorModule,
    EffectsModule.run(TaskEffects)
];

const COMPONENTS: any[] = [
    ProjectComponent,
    TaskStatusComponent,
    ProjectHeaderComponent,
    ProjectDetailComponent
];

const SERVICES: any[] = [
    TaskService,
    TaskActions
];

const PIPES: any[] = [
    FilterTaskPipe
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
