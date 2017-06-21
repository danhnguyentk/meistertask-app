import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter,
    ChangeDetectionStrategy,
    ViewChild
} from '@angular/core';

import { ConfirmModalComponent } from '../../../core/modal/components/confirm-modal/confirm-modal.component';

import { Task } from '../../../task/models/task';
import { TaskStatus } from '../../../task/models/task-status';
import { AppConfig } from '../../../core/common/services/app-config.service';

@Component({
    selector: 'project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: [ './project-detail.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent implements OnInit {
    taskStates: number[] = [ TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE ];
    @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
    @Input() taskList: Task[];
    @Output() changeTaskStatus: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(public appConfig: AppConfig) { }

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

    /**
     * Show confirm modal delete task and pass data task into modal
     * @param {Task} task [description]
     */
    onConfirmRemoveTask(task: Task) {
        this.confirmModalComponent.openModal(task);
    }

}
