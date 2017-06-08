import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import { TaskActions } from '../actions/task.actions';
import { Task } from '../models/task';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffects {

    constructor(
        private actions: Actions,
        private taskActions: TaskActions,
        private taskService: TaskService
    ) {}

    @Effect()
    getTaskList$ = this.actions
        .ofType(TaskActions.GET_TASK_LIST)
        .map(toPayload)
        .switchMap((projectId: number) => this.taskService.getTaskList(projectId))
        .map((taskList: Task[]) => this.taskActions.getTaskListSuccess(taskList));

    @Effect()
    addTask$ = this.actions
        .ofType(TaskActions.ADD_TASK)
        .map(toPayload)
        .switchMap((task: Task) => this.taskService.addTask(task))
        .map((taskRes: Task) => this.taskActions.addTaskSuccess(taskRes));

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
        .map((task: Task) => this.taskActions.completeTaskSuccess(task));

    @Effect()
    removeTask$ = this.actions
        .ofType(TaskActions.DELETE_TASK)
        .map(toPayload)
        .switchMap((task: Task) => this.taskService.removeTask(task.id))
        .map((taskId: number) => this.taskActions.deleteTaskSuccess(taskId));
}
