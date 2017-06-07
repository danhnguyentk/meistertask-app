import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Task } from '../models/task';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class TaskActions {
    static GET_TASK_LIST: string = '[Project] GET_TASK_LIST';
    static GET_TASK_LIST_SUCCESS: string = '[Project] GET_TASK_LIST_SUCCESS';
    static GET_TASK_LIST_FAIL: string = '[Project] GET_TASK_LIST_FAIL';
    static ADD_TASK: string = '[Project] ADD_TASK';
    static ADD_TASK_SUCCESS: string = '[Project] ADD_TASK_SUCCESS';
    static ADD_TASK_FAIL: string = '[Project] ADD_TASK_FAIL';

    getTaskList(projectId: number): Action {
        return {
            type: TaskActions.GET_TASK_LIST,
            payload: projectId
        };
    }

    getTaskListSuccess(taskList: Task[]): Action {
        return {
            type: TaskActions.GET_TASK_LIST_SUCCESS,
            payload: taskList
        };
    }

    getTaskListFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.GET_TASK_LIST_FAIL,
            payload: errorMessage
        };
    }

    addTask(name: string): Action {
        return {
            type: TaskActions.ADD_TASK,
            payload: name
        };
    }

    addTaskSuccess(task: Task): Action {
        return {
            type: TaskActions.ADD_TASK_SUCCESS,
            payload: TaskActions.ADD_TASK_FAIL
        };
    }

    addTaskFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.ADD_TASK_FAIL,
            payload: errorMessage
        };
    }

}
