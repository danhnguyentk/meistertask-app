import { AppState } from '../../../interface';

export function getLoadingProject(appState: AppState): boolean {
    return appState.loading.project;
}

export function getLoadingTask(appState: AppState): boolean {
    return appState.loading.task;
}
