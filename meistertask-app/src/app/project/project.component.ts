import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../interface';
import { TaskActions } from './actions/task.actions';
import { getTaskList } from './reducers/task.selectors';
import { Task } from './models/task';
import { TaskStatus } from './models/task-status';
import { Logger } from '../core/logger.service';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
    projectId: number;
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

    getTaskList() {
        this.projectId = +this.route.snapshot.params['id'];
        this.logger.info('projectId: ', this.projectId);
        this.store.dispatch(this.taskActions.getTaskList(this.projectId));
    }

    onChangeTaskStatus(task: Task) {
        this.logger.debug('On change task status event work with data: ', task);
        this.store.dispatch(this.taskActions.updateTaskStatus(task));
    }

    onAddTask(task: Task) {
        task = _.assignIn({}, task, { projectId: this.projectId });
        this.store.dispatch(this.taskActions.addTask(task));
    }

    onCompleteTask(task: Task) {
        this.store.dispatch(this.taskActions.completeTask(task));
    }

    onRemoveTask(task: Task) {
        this.store.dispatch(this.taskActions.deleteTask(task));
    }
}
