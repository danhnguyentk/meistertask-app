import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

import { Task } from '../../models/task';
import { TaskStatus } from '../../models/task-status';

@Component({
    selector: 'project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: [ './project-detail.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent implements OnInit {
    @Input() taskList: Task[];
    @Output() changeTaskStatus: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();
    taskStates: number[] = [ TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE ];

    constructor() { }

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
