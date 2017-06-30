import {
    Component,
    OnInit,
} from '@angular/core';
import {
    FormGroup,
    Validators,
    FormArray,
    FormBuilder
} from '@angular/forms';

import { FormBuilderWrapper } from '../core/form/services/form-builder-wrapper';
import { Logger } from '../core/common/services/logger.service';
import { CustomValidator } from '../core/common/services/custom-validator.service';

@Component({
    selector: 'personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fbw: FormBuilderWrapper,
        private logger: Logger,
        private fb: FormBuilder,
        private customValidator: CustomValidator) { }

    ngOnInit() {
        this.buildForm();
    }

    get heightPartsBody(): FormArray {
        return this.form.get('heightPartsBody') as FormArray;
    }

    buildForm() {
        this.form = this.fbw.group({
            name: ['', [ Validators.required ]],
            heightPartsBody: this.fbw.array([])
        });
    }

    /**
     * Update user personal
     */
    updateUser() {

    }


}
