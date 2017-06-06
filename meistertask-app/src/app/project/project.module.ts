import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { TaskComponent } from './components/task/task.component';

const MODULES: any[] = [
    SharedModule
];

const COMPONENTS: any[] = [
    ProjectComponent
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS,
        TaskStatusComponent,
        TaskComponent
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class ProjectModule { }
