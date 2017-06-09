import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../interface';
import { TaskActions } from './actions/task.actions';
import { ProjectListActions } from '../dashboard/actions/project-list.actions';
import { getTaskList } from './reducers/task.selectors';
import { getProjectList } from '../dashboard/reducers/project-list.selector';
import { Task } from './models/task';
import { Project } from '../dashboard/models/project';
import { TaskStatus } from './models/task-status';
import { Logger } from '../core/logger.service';
import { getProjectSelected } from '../dashboard/reducers/project-list.selector';
import { AppConfig } from '../core/app-config.service';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
    projectId: number;
    taskList$: Observable<Task[]>;
    projectList$: Observable<Project[]>;
    project$: Observable<Project>;

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
        this.projectId = +this.route.snapshot.params['id'];
        this.logger.info('projectId: ', this.projectId);
        this.setSelectedProject();
        this.getTaskList();
        this.getProjectList();
        this.project$ = this.store.select(getProjectSelected);
        this.taskList$ = this.store.select(getTaskList);
        this.projectList$ = this.store.select(getProjectList);
    }

    setSelectedProject() {
        this.store.dispatch(this.projectListAction.setSelectedProject(this.projectId));
    }

    getProjectList() {
        this.store.dispatch(this.projectListAction.getProjectList());
    }

    getTaskList() {
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
