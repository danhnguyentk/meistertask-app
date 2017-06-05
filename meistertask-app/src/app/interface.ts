import { AuthState } from './auth/store/auth.state';
import { ProjectState } from './dashboard/reducers/project.state';

export interface AppState {
    auth: AuthState;
    project: ProjectState;
}
