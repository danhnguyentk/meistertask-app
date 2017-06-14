import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ElementRef
} from '@angular/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { DragDropData } from 'ng2-dnd';

import { AppState } from '../../../interface';
import { Task } from '../../models/task';
import { TaskStatus } from '../../models/task-status';
import { TaskActions } from '../../actions/task.actions';
import { Logger } from '../../../core/logger.service';
import { AppConfig } from '../../../core/app-config.service';

@Component({
    selector: 'task-status',
    templateUrl: './task-status.component.html',
    styleUrls: [ './task-status.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStatusComponent implements OnInit {
    _statusValue: number;
    statusName: string;
    className: string;
    @Input() tasks: Task;
    dropZones: number[];
    dragZones: number[];
    @Output() changeTaskStatus: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();
    isShowFormTask: boolean = false;
    // Element when drag data
    dragHelper: HTMLElement;
    // Element contain drag element
    parentElement: HTMLElement;

    constructor(
        private taskActions: TaskActions,
        private logger: Logger,
        private elementRef: ElementRef,
        private appConfig: AppConfig) {
    }

    @Input() set statusValue(value) {
        console.log(value);
        this._statusValue = +value;
        this.statusName = _.upperCase(TaskStatus[this._statusValue]);
        this.className = this.getClass(this._statusValue);
        this.getDropDragZones(this._statusValue);
    }

    get statusValue(): number {
        return this._statusValue;
    }

   ngOnInit() {
        this.parentElement = this.elementRef.nativeElement.querySelector('.task-list');
        console.log(this.parentElement);
    }

    /**
     * Get class of component by status value input
     */
    getClass(statusValue: number) {
        switch (this._statusValue) {
            case TaskStatus.OPEN:
                return 'task-open';

            case TaskStatus.IN_PROGRESS:
                return 'task-in-progress';

            case TaskStatus.DONE:
                return 'task-done';

            default:
                return null;
        }
    }

    getDropDragZones(statusValue: number) {
        switch (this._statusValue) {
            case TaskStatus.OPEN:
                this.dropZones = [ TaskStatus.OPEN ];
                this.dragZones = [ TaskStatus.IN_PROGRESS ];
                break;

            case TaskStatus.IN_PROGRESS:
                this.dropZones = [ TaskStatus.IN_PROGRESS ];
                this.dragZones = [ TaskStatus.DONE ];
                break;

            case TaskStatus.DONE:
                this.dropZones = [ TaskStatus.DONE ];
                this.dragZones = [ TaskStatus.OPEN, TaskStatus.IN_PROGRESS];
                break;

            default:
                return null;
        }
    }

    /**
     * Drag task from this status to other status
     */
    onChangeTaskStatus(event: DragDropData, newStatus: TaskStatus) {
        this.logger.info('Move task to new status: ', event.dragData, newStatus);
        const task: Task = _.assignIn({}, event.dragData, { status: newStatus });
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
                this.addTask.emit(task);
            }
            this.isShowFormTask = false;
        } else if (event.type === 'focusout') {
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

    /**
     * Add class when drag element
     */
    dragStart(event: any) {
        event.mouseEvent.target.classList.add('dnd-drag-start-custom')
        this.setDragImage(event.mouseEvent);
    }

    dragEnd(event: any) {
        event.mouseEvent.target.classList.remove('dnd-drag-start-custom')
        this.removeDragImage();
    }

    setDragImage(event: DragEvent | any) {
        this.dragHelper = (event.target).cloneNode(true);
        this.dragHelper.classList.add('dragHelper');
        this.parentElement.appendChild(this.dragHelper);
        // Add child element
        let descMoveTask: HTMLElement = document.createElement('span');
        descMoveTask.innerText = this.appConfig.MOVE_TASK;
        descMoveTask.classList.add('desc-move-task');
        this.dragHelper.appendChild(descMoveTask);
        this.logger.info('Clone drag data:', this.dragHelper);
        this.logger.info('Mouse event: ', event);
        event.dataTransfer.setDragImage(this.dragHelper, event.offsetX, event.offsetY);
    }

    removeDragImage() {
        if (this.parentElement && this.dragHelper) {
            this.parentElement.removeChild(this.dragHelper);
        }
    }

}
