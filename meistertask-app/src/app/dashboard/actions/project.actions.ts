import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class ProjectActions {

    constructor() {}

    static GET_PROJECT_LIST = '[Project] GET_PROJECT_LIST';
    static GET_PROJECT_LIST_SUCCESS = '[Project] GET_PROJECT_LISR_SUCCESS';
    static CREATE_PROJECT = '[Project] CREATE_PROJECT';
    static CREATE_PROJECT_SUCCESS = '[Project] CREATE_PROJECT_SUCCESS';
    static CREATE_PROJECT_FAIL = '[Project] CREATE_PROJECT_FAIL';

    getProjectList(): Action {
        return {
            type: ProjectActions.GET_PROJECT_LIST,
        };
    }

    getProjectListSuccess(projectList: Project[]): Action {
        return {
            type: ProjectActions.GET_PROJECT_LIST_SUCCESS,
            payload: projectList
        };
    }

    createProject(project: Project): Action {
        return {
            type: ProjectActions.CREATE_PROJECT,
            payload: project
        };
    }

    createProjectSuccess(project: Project): Action {
        return {
            type: ProjectActions.CREATE_PROJECT_SUCCESS,
            payload: project
        };
    }

    createProjectFail(errorMessage: ErrorMessage): Action {
        return {
            type: ProjectActions.CREATE_PROJECT_FAIL,
            payload: errorMessage
        };
    }

}
