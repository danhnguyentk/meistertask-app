import {
    Component,
    OnInit,
    ViewChild,
    EventEmitter,
    Output
} from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { Modal } from 'ngx-modal';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'search-task-modal',
    templateUrl: './search-task-modal.component.html',
    styleUrls: ['./search-task-modal.component.scss']
})
export class SearchTaskModalComponent implements OnInit {
    form: FormGroup;
    @ViewChild(Modal) modal: Modal;
    searchTask: EventEmitter<string> = new EventEmitter<string>();

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
            return;
        }
        this.searchTask.emit(this.form.get('task').value);
    }

    openModal() {
        this.modal.open();
    }

}
