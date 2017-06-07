import { AuthState } from './auth/reducers/auth.state';
import { ProjectListState } from './dashboard/reducers/project-list.state';
import { TaskState } from './project/reducers/task.state';

export interface AppState {
    auth: AuthState;
    project: ProjectListState;
    task: TaskState;
}
