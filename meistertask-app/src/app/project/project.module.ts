import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project.component';

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
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class ProjectModule { }
