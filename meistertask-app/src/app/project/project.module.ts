import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';

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
        TaskStatusComponent
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class ProjectModule { }
