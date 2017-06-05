import { AppState } from '../../interface';
import { ProjectState } from './project.state';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { Project } from '../models/project';

export function getProject(state: AppState): ProjectState {
    return state.project;
}

export function getProjectList(state: AppState): Project[] {
    return state.project.projectList;
}

export function getErrorMessage(state: AppState): ErrorMessage {
    return state.project.errorMessage;
}
