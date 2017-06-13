import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class ProjectListActions {

    constructor() {}

    static GET_PROJECT_LIST = '[Project] GET_PROJECT_LIST';
    static GET_PROJECT_LIST_SUCCESS = '[Project] GET_PROJECT_LIST_SUCCESS';
    static CREATE_PROJECT = '[Project] CREATE_PROJECT';
    static CREATE_PROJECT_SUCCESS = '[Project] CREATE_PROJECT_SUCCESS';
    static CREATE_PROJECT_FAIL = '[Project] CREATE_PROJECT_FAIL';
    static SET_SELECTED_PROJECT = '[Project] SET_SELECT_PROJECT';
    static INCREASE_NUMBER_TASK = '[Project] INCREASE_NUMBER_TASK';

    getProjectList(): Action {
        return {
            type: ProjectListActions.GET_PROJECT_LIST,
        };
    }

    getProjectListSuccess(projectList: Project[]): Action {
        return {
            type: ProjectListActions.GET_PROJECT_LIST_SUCCESS,
            payload: projectList
        };
    }

    createProject(project: Project): Action {
        return {
            type: ProjectListActions.CREATE_PROJECT,
            payload: project
        };
    }

    createProjectSuccess(project: Project): Action {
        return {
            type: ProjectListActions.CREATE_PROJECT_SUCCESS,
            payload: project
        };
    }

    createProjectFail(errorMessage: ErrorMessage): Action {
        return {
            type: ProjectListActions.CREATE_PROJECT_FAIL,
            payload: errorMessage
        };
    }

    setSelectedProject(projectId: number): Action {
        return {
            type: ProjectListActions.SET_SELECTED_PROJECT,
            payload: projectId
        };
    }

    increaseNumberTask(projectId: number): Action {
        return {
            type: ProjectListActions.INCREASE_NUMBER_TASK,
            payload: projectId
        };
    }

}
