import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProjectListActions } from '../project/actions/project-list.actions';
import { AppState } from '../interface';
import { getProjectList } from '../project/selectors/project-list.selector';
import { Project } from '../project/models/project';
import { AppConfig } from '../core/common/services/app-config.service';
import { Task } from '../task/models/task';
import { TaskActions } from '../task/actions/task.actions';
import { SearchActions } from '../task/actions/search.actions';
import { AuthActions } from '../auth/actions/auth.actions';
import { getTasksSearch } from '../task/selectors/search.selectors';
import { getAuthUser } from '../auth/selectors/auth.selectors';
import { User } from '../auth/models/user';
import { getLoadingProject } from '../core/loading-indicator/selectors/loading.selectors';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
    projectList$: Observable<Project[]>;
    user$: Observable<User>;
    taskListSearch$: Observable<Task[]>;
    isLoading$: Observable<boolean>;

    constructor(
        private projectActions: ProjectListActions,
        private taskActions: TaskActions,
        private store: Store<AppState>,
        private appConfig: AppConfig,
        private router: Router,
        private authActions: AuthActions,
        private searchActions: SearchActions
    ) { }

    ngOnInit() {
        this.getProjectList();
        this.user$ = this.store.select(getAuthUser);
        this.taskListSearch$ = this.store.select(getTasksSearch);
        this.store.dispatch(this.taskActions.getTaskList());
        this.isLoading$ = this.store.select(getLoadingProject);
    }

    getProjectList() {
        this.store.dispatch(this.projectActions.getProjectList());
        this.projectList$ = this.store.select(getProjectList);
    }

    onAddProject(project: Project) {
        this.store.dispatch(this.projectActions.createProject(project));
    }

    onGoDetailProject(project: Project) {
        this.router.navigate([ this.appConfig.ROUTES.PROJECT, project.id, project.nameProject ]);
    }

    onAddTask(task: Task) {
        this.store.dispatch(this.taskActions.addTask(task));
    }

    onLogout() {
        this.store.dispatch(this.authActions.logout());
        this.router.navigateByUrl(this.appConfig.ROUTES.LOGIN);
    }

    onSearchTask(term: string) {
        this.store.dispatch(this.searchActions.searchTasks(term));
        this.store.dispatch(this.searchActions.updateQuerySearch(term));
    }

    onResetSearchTask() {
        this.store.dispatch(this.searchActions.resetSearchTasks());
    }

    onCompleteTask(task: Task) {
        this.store.dispatch(this.taskActions.completeTask(task));
    }

    onRemoveTask(task: Task) {
        this.store.dispatch(this.taskActions.deleteTask(task));
    }

}
