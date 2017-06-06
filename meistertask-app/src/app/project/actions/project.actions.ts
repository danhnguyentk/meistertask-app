import { Action } from '@ngrx/store';

export class ProjectActions {
    static ADD_TASK: string = '[Project] ADD_TASK';

    addTask(name: string): Action {
        return {
            type: ProjectActions.ADD_TASK,
            payload: name
        };
    }
}
