import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter
} from '@angular/core';

import { Store } from '@ngrx/store';

import { Task } from '../../models/task';
import { AppState } from '../../../interface';

@Component({
    selector: 'project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: [ './project-detail.component.scss' ]
})
export class ProjectDetailComponent implements OnInit {
    @Input() taskList: Task[];
    @Output() changeTaskStatus: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(
        private store: Store<AppState>) { }

    ngOnInit() {
    }

    onChangeTaskStatus(task: Task) {
        this.changeTaskStatus.emit(task);
    }

    onAddTask(task: Task) {
        this.addTask.emit(task);
    }

    onCompleteTask(task: Task) {
        this.completeTask.emit(task);
    }

    onRemoveTask(task: Task) {
        this.removeTask.emit(task);
    }

}
