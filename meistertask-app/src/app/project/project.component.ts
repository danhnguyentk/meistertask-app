import {
    Component,
    OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../interface';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {

    constructor(
        private store: Store<AppState>,
        ) { }

    ngOnInit() {
    }

    addTask(event: KeyboardEvent, nameTask: string) {
        if (event.which === 13 || event.keyCode === 13) {
            this.store.dispatch
        }
    }
}
