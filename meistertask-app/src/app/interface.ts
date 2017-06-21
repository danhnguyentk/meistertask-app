import { AuthState } from './auth/models/auth.state';
import { ProjectListState } from './project/models/project-list.state';
import { TaskState } from './task/models/task.state';
import { ErrorState } from './core/form/models/error.state';
import { LoadingState } from './core/loading-indicator/models/loading.state';
import { SearchState } from './task/models/search.state';

export interface AppState {
    auth: AuthState;
    project: ProjectListState;
    task: TaskState;
    error: ErrorState;
    loading: LoadingState;
    search: SearchState;
}
