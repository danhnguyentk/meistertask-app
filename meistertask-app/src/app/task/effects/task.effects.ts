import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import * as _ from 'lodash';

import { AppState } from '../../interface';
import { TaskActions } from '../actions/task.actions';
import { ProjectListActions } from '../../project/actions/project-list.actions';
import { Task } from '../models/task';
import { Project } from '../../project/models/project';
import { ErrorMessage } from '../../core/form/models/error-message.model';
import { TaskService } from '../services/task.service';
import { Logger } from '../../core/shared/services/logger.service';
import { getProjectList } from '../../project/selectors/project-list.selector';

@Injectable()
export class TaskEffects {

    constructor(
        private actions: Actions,
        private taskActions: TaskActions,
        private taskService: TaskService,
        private projectListActions: ProjectListActions,
        private logger: Logger,
        private store: Store<AppState>
    ) {}

    @Effect()
    getTaskList$ = this.actions
        .ofType(TaskActions.GET_TASK_LIST)
        .switchMap(() => this.taskService.getAllTask())
        .map((tasks: Task[]) => this.taskActions.getTaskListSuccess(tasks));

    @Effect()
    getTaskListByProject$ = this.actions
        .ofType(TaskActions.GET_TASK_LIST_BY_PROJECT)
        .map(toPayload)
        .switchMap((projectId: number) => this.taskService.getTaskListByProject(projectId))
        .map((taskList: Task[]) => this.taskActions.getTaskListByProjectSuccess(taskList));

    @Effect()
    addTask$ = this.actions
        .ofType(TaskActions.ADD_TASK)
        .map(toPayload)
        .mergeMap((task: Task) => this.taskService.addTask(task))
        .mergeMap((taskRes: Task) => {
            return Observable.of(
                this.taskActions.addTaskSuccess(taskRes),
                this.projectListActions.increaseNumberTask(taskRes.projectId));
        });

    @Effect()
    updateTaskStatus$ = this.actions
        .ofType(TaskActions.UPDATE_TASK_STATUS)
        .map(toPayload)
        .switchMap((task: Task) => {
            return this.taskService.updateStatusTask(task.id, task.status);
        })
        .map((task: Task) => this.taskActions.updateTaskStatusSuccess(task));

    @Effect()
    completeTask$ = this.actions
        .ofType(TaskActions.COMPLETE_TASK)
        .map(toPayload)
        .switchMap((task: Task) => this.taskService.completeTask(task.id))
        .switchMap((task: Task) => {
            return Observable.of(
                this.taskActions.completeTaskSuccess(task),
                this.projectListActions.getProjectList()
                );
        });

    @Effect()
    removeTask$ = this.actions
        .ofType(TaskActions.DELETE_TASK)
        .map(toPayload)
        .switchMap((task: Task) => this.taskService.removeTask(task.id))
        .map((taskId: number) => this.taskActions.deleteTaskSuccess(taskId));

}
