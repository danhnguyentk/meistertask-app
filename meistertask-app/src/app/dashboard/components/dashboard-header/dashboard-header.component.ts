import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import * as _ from 'lodash';
import { Dropdown } from 'ngx-dropdown';

import { Logger } from '../../../core/shared/services/logger.service';
import { Project } from '../../../project/models/project';
import { Task } from '../../../task/models/task';
import { User } from '../../../auth/models/user';
import { SearchTaskModalComponent } from '../../../core/search-task-modal/components/search-task-modal/search-task-modal.component';

@Component({
    selector: 'dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: [ './dashboard-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent implements OnInit {
    @ViewChild(SearchTaskModalComponent) searchTaskModalComponent: SearchTaskModalComponent;

    @Input() projectList: Project[];
    @Input() user: User;
    @Input() taskListSearch: Task[];

    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() logout: EventEmitter<any> = new EventEmitter();
    @Output() searchTask: EventEmitter<string> = new EventEmitter<string>();
    @Output() resetSearchTask: EventEmitter<any> = new EventEmitter();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger) { }

    ngOnInit() {

    }

    onAddTask(task: Task) {
        this.addTask.emit(task);
    }

    onLogout() {
        this.logout.emit();
    }

    openModal() {
        this.searchTaskModalComponent.openModal();
    }

    onSearchTask(term: string) {
        this.searchTask.emit(term);
    }

    onResetSearchTask() {
        this.resetSearchTask.emit();
    }

    onCompleteTask(task: Task) {
        this.completeTask.emit(task);
    }

    onRemoveTask(task: Task) {
        this.removeTask.emit(task);
    }

}
