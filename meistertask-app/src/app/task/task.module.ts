import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { DndModule } from 'ng2-dnd';
import { DropdownModule } from 'ngx-dropdown';

import { ModalModule } from '../core/modal/modal.module';
import { MainHeaderModule } from '../core/main-header/main-header.module';
import { LoadingIndicatorModule } from '../core/loading-indicator/loading-indicator.module';
import { FormModule } from '../core/form/form.module';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { TaskEffects } from './effects/task.effects';
import { SearchEffects } from './effects/search.effects';
import { TaskService } from './services/task.service';
import { TaskActions } from './actions/task.actions';
import { SearchActions } from './actions/search.actions';
import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { DropdownAddTaskComponent } from './components/dropdown-add-task/dropdown-add-task.component';
import { SearchTaskModalComponent } from './components/search-task-modal/search-task-modal.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const MODULES: any[] = [
    CommonModule,
    DndModule.forRoot(),
    ModalModule,
    MainHeaderModule,
    FormModule,
    DropdownModule,
    LoadingIndicatorModule,
    EffectsModule.run(TaskEffects),
    EffectsModule.run(SearchEffects)
];

const COMPONENTS: any[] = [
    TaskStatusComponent,
    DropdownAddTaskComponent,
    AddTaskComponent,
    SearchTaskModalComponent
];

const SERVICES: any[] = [
    TaskService,
    TaskActions,
    SearchActions
];

const PIPES: any[] = [
    FilterTaskPipe,
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
        ...PIPES,
        DndModule
    ]
})
export class TaskModule { }
