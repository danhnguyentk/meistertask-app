import * as _ from 'lodash';

import { AppState } from '../../interface';
import { ProjectListState } from '../models/project-list.state';
import { ErrorMessage } from '../../core/shared/models/error-message.model';
import { Project } from '../models/project';

export function getProject(state: AppState): ProjectListState {
    return state.project;
}

export function getProjectList(state: AppState): Project[] {
    return state.project.projectList;
}

export function getErrorMessage(state: AppState): ErrorMessage {
    return state.project.errorMessage;
}

export function getProjectSelected(state: AppState): Project {
    return _.find(state.project.projectList, { id: state.project.projectIdSelected });
}
