import { AuthState } from './auth/reducers/auth.state';
import { ProjectListState } from './dashboard/reducers/project-list.state';

export interface AppState {
    auth: AuthState;
    project: ProjectListState;
}
