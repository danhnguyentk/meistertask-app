import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../interface';
import { TaskActions } from './actions/task.actions';
import { getTaskList } from './reducers/task.selectors';
import { Task } from './models/task';
import { Logger } from '../core/logger.service';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
    taskList$: Observable<Task[]>;

    constructor(
        private store: Store<AppState>,
        private taskActions: TaskActions,
        private route: ActivatedRoute,
        private logger: Logger
        ) { }

    ngOnInit() {
        this.getTaskList();
        this.taskList$ = this.store.select(getTaskList);
    }

    addTask(event: KeyboardEvent, nameTask: string) {
        if (event.which === 13 || event.keyCode === 13) {
            // FIXME: dispatch action
        }
    }

    getTaskList() {
        const projectId: number = this.route.snapshot.params['id'];
        this.logger.info('projectId: ', projectId);
        this.store.dispatch(this.taskActions.getTaskList(projectId));
    }

}
