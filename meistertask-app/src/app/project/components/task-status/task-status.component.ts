import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../../interface';
import { Task } from '../../models/task';
import { TaskStatus } from '../../models/task-status';
import { TaskActions } from '../../actions/task.actions';
import { Logger } from '../../../core/logger.service';

@Component({
    selector: 'task-status',
    templateUrl: './task-status.component.html',
    styleUrls: [ './task-status.component.scss' ]
})
export class TaskStatusComponent implements OnInit {
    _statusValue: number;
    @Input() statusName: string;
    @Input() tasks: Task;
    @Output() changeTaskStatus: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();

    isShowFormTask: boolean = false;

    constructor(
        private store: Store<AppState>,
        private taskActions: TaskActions,
        private logger: Logger) { }

    @Input() set statusValue(value) {
        this._statusValue = +value;
    }

    get statusValue(): number {
        return this._statusValue;
    }

    ngOnInit() {
    }

    /**
     * Drag task from this status to other status
     */
    onChangeTaskStatus(task: Task, newStatus: TaskStatus) {
        task = _.assignIn({}, task, { status: newStatus });
        this.changeTaskStatus.emit(task);
    }

    showFormTask() {
        this.isShowFormTask = true;
    }

    onAddTask(event, nameTask: string) {
        if (event.type === 'keyup' && (event.which === 13 || event.keyCode === 13)) {
            if (nameTask) {
                const task: Task = { name: nameTask, status: this.statusValue };
                this.logger.info(task);
                this.addTask.emit(task)
            }
            this.isShowFormTask = false;
        } else if (event.type === 'focusout'){
            // Not execute event focusout when hiden form input from keyup
            if (nameTask && this.isShowFormTask) {
                this.logger.info(this.isShowFormTask);
                const task: Task = { name: nameTask, status: this.statusValue };
                this.addTask.emit(task);
            }
            this.isShowFormTask = false;
        }
    }

    onCompleteTask(event: Event, task: Task) {
        event.stopPropagation();
        this.completeTask.emit(task);
    }

    onRemoveTask(event: Event, task: Task) {
        this.logger.info('Remove task with: ', task);
        event.stopPropagation();
        this.removeTask.emit(task);
    }

}
