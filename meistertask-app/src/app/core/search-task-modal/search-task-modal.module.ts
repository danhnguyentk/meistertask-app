import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchActions } from './actions/search.actions';
import { SearchTaskModalComponent } from './components/search-task-modal/search-task-modal.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS: any[] = [
    SearchTaskModalComponent
];

const MODULES: any[] = [
    CommonModule,
    SharedModule
];

const SERVICES: any[] = [
    SearchActions
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
export class SearchTaskModalModule { }
