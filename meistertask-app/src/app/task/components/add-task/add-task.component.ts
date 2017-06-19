import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { Logger } from '../../../core/shared/services/logger.service';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: [ './add-task.component.scss' ]
})
export class AddTaskComponent implements OnInit {
    formTask: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.formTask = this.formBuilder.group({
            name: [ '', Validators.required ]
        });
    }
}
