import {
    Component,
    OnInit,
} from '@angular/core';
import { Router } from '@angular/router';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProjectListActions } from './actions/project-list.actions';
import { AppState } from '../interface';
import {
    getProjectList,
    getErrorMessage
} from './selectors/project-list.selector';
import { Project } from './models/project';
import { AppConfig } from '../core/app-config.service';
import { Task } from '../project/models/task';
import { TaskActions } from '../project/actions/task.actions';
import { AuthActions } from '../auth/actions/auth.actions';
import {
    getTaskListSearch,
    getTasksSearch
} from '../project/selectors/task.selectors';
import { getAuthUser } from '../auth/selectors/auth.selectors';
import { User } from '../auth/models/user';
import { getIsLoading } from './selectors/project-list.selector';
import { getLoadingProject } from '../shared/selectors/loading.selectors';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
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
        private authActions: AuthActions
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
        this.store.dispatch(this.taskActions.updateQuerySearch(term));
    }

    onResetSearchTask() {
        this.store.dispatch(this.taskActions.resetSearchTasks());
    }

    onCompleteTask(task: Task) {
        console.log('sss');
        this.store.dispatch(this.taskActions.completeTask(task));
    }

    onRemoveTask(task: Task) {
        this.store.dispatch(this.taskActions.deleteTask(task));
    }

}
