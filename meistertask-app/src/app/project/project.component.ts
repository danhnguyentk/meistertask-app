import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../interface';
import { TaskActions } from '../task/actions/task.actions';
import { ProjectListActions } from '../project/actions/project-list.actions';
import { getTaskListByProject } from '../task/selectors/task.selectors';
import { getProjectList } from '../project/selectors/project-list.selector';
import { Task } from '../task/models/task';
import { Project } from '../project/models/project';
import { Logger } from '../core/common/services/logger.service';
import { getProjectSelected } from '../project/selectors/project-list.selector';
import { AppConfig } from '../core/common/services/app-config.service';
import { getLoadingTask } from '../core/loading-indicator/selectors/loading.selectors';
import { User } from '../auth/models/user';
import { getAuthUser } from '../auth/selectors/auth.selectors';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: [ './project.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {
    projectId: number;
    taskList$: Observable<Task[]>;
    projectList$: Observable<Project[]>;
    project$: Observable<Project>;
    isLoadingTaskByProject$: Observable<boolean>;
    user$: Observable<User>;

    constructor(
        private store: Store<AppState>,
        private taskActions: TaskActions,
        private projectListAction: ProjectListActions,
        private route: ActivatedRoute,
        private logger: Logger,
        private router: Router,
        private appConfig: AppConfig
        ) { }

    ngOnInit() {
        this.logger.debug('Init Project component');
        this.route.params.subscribe((params) => {
            this.projectId = +params['id'];
            this.init();
        });
    }

    init() {
        this.logger.info('ProjectId: ', this.projectId);
        this.setSelectedProject();
        this.getTaskListByProject();
        this.getProjectList();
        this.user$ = this.store.select(getAuthUser);
        this.project$ = this.store.select(getProjectSelected);
        this.taskList$ = this.store.select(getTaskListByProject);
        this.projectList$ = this.store.select(getProjectList);
        this.isLoadingTaskByProject$ = this.store.select(getLoadingTask);
    }

    setSelectedProject() {
        this.store.dispatch(this.projectListAction.setSelectedProject(this.projectId));
    }

    getProjectList() {
        this.store.dispatch(this.projectListAction.getProjectList());
    }

    getTaskListByProject() {
        this.store.dispatch(this.taskActions.getTaskListByProject(this.projectId));
    }

    onChangeTaskStatus(task: Task) {
        this.logger.debug('On change task status event work with data: ', task);
        this.store.dispatch(this.taskActions.updateTaskStatus(task));
    }

    onAddTask(task: Task) {
        task = _.assignIn({}, task, { projectId: this.projectId });
        this.store.dispatch(this.taskActions.addTask(task));
    }

    onCompleteTask(task: Task) {
        this.store.dispatch(this.taskActions.completeTask(task));
    }

    onRemoveTask(task: Task) {
        this.store.dispatch(this.taskActions.deleteTask(task));
    }

    onSwitchProject(project: Project) {
        this.router.navigate([ this.appConfig.ROUTES.PROJECT, project.id, project.nameProject ]);
    }
}
