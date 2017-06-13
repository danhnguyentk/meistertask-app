import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Task } from '../models/task';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class TaskActions {
    static GET_TASK_LIST: string = '[Project] GET_TASK_LIST';
    static GET_TASK_LIST_SUCCESS: string = '[Project] GET_TASK_LIST_SUCCESS';
    static GET_TASK_LIST_FAIL: string = '[Project] GET_TASK_LIST_FAIL';
    static GET_TASK_LIST_BY_PROJECT: string = '[Project] GET_TASK_LIST_BY_PROJECT';
    static GET_TASK_LIST_BY_PROJECT_SUCCESS: string = '[Project] GET_TASK_LIST_BY_PROJECT_SUCCESS';
    static GET_TASK_LIST_BY_PROJECT_FAIL: string = '[Project] GET_TASK_LIST_BY_PROJECT_FAIL';
    static ADD_TASK: string = '[Project] ADD_TASK';
    static ADD_TASK_SUCCESS: string = '[Project] ADD_TASK_SUCCESS';
    static ADD_TASK_FAIL: string = '[Project] ADD_TASK_FAIL';
    static UPDATE_TASK_STATUS: string = '[Project] UPDATE_TASK_STATUS';
    static UPDATE_TASK_STATUS_SUCCESS: string = '[Project] UPDATE_TASK_STATUS_SUCCESS';
    static UPDATE_TASK_STATUS_FAIL: string = '[Project] UPDATE_TASK_STATUS_FAIL';
    static COMPLETE_TASK: string = '[Project] COMPLETE_TASK';
    static COMPLETE_TASK_SUCCESS: string = '[Project] COMPLETE_TASK_SUCCESS';
    static COMPLETE_TASK_FAIL: string = '[Project] COMPLETE_TASK_FAIL';
    static DELETE_TASK: string = '[Project] DELETE_TASK';
    static DELETE_TASK_SUCCESS: string = '[Project] DELETE_TASK_SUCCESS';
    static DELETE_TASK_FAIL: string = '[Project] DELETE_TASK_FAIL';
    static SEARCH_TASKS: string = '[Project] SEARCH_TASK';
    static SEARCH_TASKS_SUCCESS: string = '[Project] SEARCH_TASK_SUCCESS';
    static SEARCH_TASKS_FAIL: string = '[Project] SEARCH_TASK_FAIL';
    static RESET_SEARCH_TASKS: string = '[Project] RESET_SEARCH_TASKS';
    static UPDATE_QUERY_SEARCH: string = '[Project] UPDATE_QUERY_SEARCH';

    getTaskList(): Action {
        return {
            type: TaskActions.GET_TASK_LIST,
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

    getTaskListByProject(projectId: number): Action {
        return {
            type: TaskActions.GET_TASK_LIST_BY_PROJECT,
            payload: projectId
        };
    }

    getTaskListByProjectSuccess(taskList: Task[]): Action {
        return {
            type: TaskActions.GET_TASK_LIST_BY_PROJECT_SUCCESS,
            payload: taskList
        };
    }

    getTaskListByProjectFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.GET_TASK_LIST_BY_PROJECT_FAIL,
            payload: errorMessage
        };
    }

    addTask(task: Task): Action {
        return {
            type: TaskActions.ADD_TASK,
            payload: task
        };
    }

    addTaskSuccess(task: Task): Action {
        return {
            type: TaskActions.ADD_TASK_SUCCESS,
            payload: task
        };
    }

    addTaskFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.ADD_TASK_FAIL,
            payload: errorMessage
        };
    }

    updateTaskStatus(task: Task): Action {
        return {
            type: TaskActions.UPDATE_TASK_STATUS,
            payload: task
        };
    }

    updateTaskStatusSuccess(task: Task): Action {
       return {
           type: TaskActions.UPDATE_TASK_STATUS_SUCCESS,
           payload: task
       };
    }

    updateTaskStatusFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.UPDATE_TASK_STATUS_FAIL,
            payload: errorMessage
        };
    }

    completeTask(task: Task): Action {
        return {
            type: TaskActions.COMPLETE_TASK,
            payload: task
        };
    }

    completeTaskSuccess(task: Task): Action {
        return {
            type: TaskActions.COMPLETE_TASK_SUCCESS,
            payload: task
        };
    }

    completeTaskFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.COMPLETE_TASK_FAIL,
            payload: errorMessage
        };
    }

    deleteTask(task: Task): Action {
        return {
            type: TaskActions.DELETE_TASK,
            payload: task
        };
    }


    deleteTaskSuccess(taskId: number): Action {
        return {
            type: TaskActions.DELETE_TASK_SUCCESS,
            payload: taskId
        };
    }

    deleteTaskFail(errorMessage: ErrorMessage): Action {
        return {
            type: TaskActions.DELETE_TASK_FAIL,
            payload: errorMessage
        };
    }

    searchTasks(term: string): Action {
        return {
            type: TaskActions.SEARCH_TASKS,
            payload: term
        };
    }

    searchTasksSuccess(tasks: Task[]): Action {
        return {
            type: TaskActions.SEARCH_TASKS_SUCCESS,
            payload: tasks
        };
    }

    resetSearchTasks(): Action {
        return {
            type: TaskActions.RESET_SEARCH_TASKS
        };
    }

    updateQuerySearch(querySearch: string): Action {
        return {
            type: TaskActions.UPDATE_QUERY_SEARCH,
            payload: querySearch
        };
    }
}
