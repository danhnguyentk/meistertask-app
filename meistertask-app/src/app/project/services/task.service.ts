import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Task } from '../models/task';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { AppConfig } from '../../core/app-config.service';

@Injectable()
export class TaskService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig) { }

    getAllTask(): Observable<Task[]> {
        return this.httpWrapperService.get(this.appConfig.API.TASK).delay(700);
    }

    getTaskListByProject(projectId: number): Observable<Task[]> {
        return this.httpWrapperService.get(this.appConfig.API.TASK, { projectId }).delay(2000);
    }

    /**
     * Add task to project
     */
    addTask(task: Task): Observable<Task> {
        task = _.assignIn({}, task, { id: new Date().valueOf(), dateCreated: moment().format('dd/mm/yyyy'), isCompleted: false });
        return this.httpWrapperService.post(this.appConfig.API.TASK, task).delay(1500);
    }

    getTask(taskId: number): Observable<Task> {
        return this.httpWrapperService.get(this.appConfig.API.TASK, { id: taskId }).delay(1200);
    }

    /**
     * Update status of task by taskId
     */
    updateStatusTask(taskId: number, status): Observable<Task> {
        return this.httpWrapperService.patch(`${this.appConfig.API.TASK}/${taskId}`, { status }).delay(1400);
    }

    completeTask(taskId: number): Observable<Task> {
        return this.httpWrapperService.patch(`${this.appConfig.API.TASK}/${taskId}`, { isCompleted: true }).delay(1700);
    }

    removeTask(taskId: number): Observable<number> {
        return this.httpWrapperService
            .delete(`${this.appConfig.API.TASK}/${taskId}`)
            .mapTo(taskId)
            .delay(1000);
    }

    searchTaskByTerm(term: string) {
        return this.httpWrapperService
            .get(this.appConfig.API.TASK, { name_like: term })
            .delay(600);
    }

}
