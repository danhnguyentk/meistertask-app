import { AuthState } from './auth/models/auth.state';
import { ProjectListState } from './dashboard/models/project-list.state';
import { TaskState } from './project/models/task.state';
import { ErrorState } from './shared/models/error.state';
import { LoadingState } from './shared/models/loading.state';
import { SearchState } from './shared/models/search.state';

export interface AppState {
    auth: AuthState;
    project: ProjectListState;
    task: TaskState;
    error: ErrorState;
    loading: LoadingState;
    search: SearchState;
}
