import { AppState } from '../../interface';
import { ProjectListState } from './project-list.state';
import { ErrorMessage } from '../../shared/models/error-message.model';
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
