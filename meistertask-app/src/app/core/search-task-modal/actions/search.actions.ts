import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Task } from '../../../task/models/task';

@Injectable()
export class SearchActions {
    static SEARCH_TASKS: string = '[Share] SEARCH_TASK';
    static SEARCH_TASKS_SUCCESS: string = '[Share] SEARCH_TASK_SUCCESS';
    static SEARCH_TASKS_FAIL: string = '[Share] SEARCH_TASK_FAIL';
    static RESET_SEARCH_TASKS: string = '[Share] RESET_SEARCH_TASKS';
    static UPDATE_QUERY_SEARCH: string = '[Share] UPDATE_QUERY_SEARCH';

    searchTasks(query: string): Action {
        return {
            type: SearchActions.SEARCH_TASKS,
            payload: query
        };
    }

    searchTasksSuccess(tasks: Task[]): Action {
        return {
            type: SearchActions.SEARCH_TASKS_SUCCESS,
            payload: tasks
        };
    }

    resetSearchTasks(): Action {
        return {
            type: SearchActions.RESET_SEARCH_TASKS
        };
    }

    updateQuerySearch(query: string): Action {
        return {
            type: SearchActions.UPDATE_QUERY_SEARCH,
            payload: query
        };
    }
}
