import {
    Component,
    OnInit,
    ViewChild,
    EventEmitter,
    Output,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { Modal } from 'ngx-modal';
import { Observable } from 'rxjs/Observable';

import { Task } from '../../../../task/models/task';

@Component({
    selector: 'search-task-modal',
    templateUrl: './search-task-modal.component.html',
    styleUrls: ['./search-task-modal.component.scss']
})
export class SearchTaskModalComponent implements OnInit {
    form: FormGroup;
    @ViewChild(Modal) modal: Modal;
    @Output() searchTask: EventEmitter<string> = new EventEmitter<string>();
    @Output() resetSearchTask: EventEmitter<any> = new EventEmitter();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Input() taskListSearch: Task[];

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            task: [ '', Validators.required ]
        });
    }

    onSearchTask() {
        if (!this.form.valid) {
            this.resetSearchTask.emit();
            return;
        }
        this.searchTask.emit(this.form.controls['task'].value);
    }

    resetSearchInput() {
        this.form.controls['task'].setValue('');
        this.resetSearchTask.emit();
    }

    openModal() {
        this.modal.open();
    }

    onCompleteTask(task: Task) {
        this.completeTask.emit(task);
    }

    onRemoveTask(task: Task) {
        this.removeTask.emit(task);
    }

}
