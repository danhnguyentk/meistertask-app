import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormArray,
    FormBuilder
} from '@angular/forms';

import * as _ from 'lodash';

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
            heightPartsBody: this.fbw.array([], this.customValidator.validatePercentage())
        });

        this.heightPartsBody.valueChanges.subscribe((array) => {
            this.logger.info(this.heightPartsBody.controls);
            this.logger.info('Form array body:', array);
            // _.forEach(this.heightPartsBody.controls, (formGroup: FormGroup) => {
            //     let control: FormControl = formGroup.get(percentageHeight)
            //     // formGroup.controls.
            // });
        });
    }

    /**
     * Add info height part of body
     */
    addPartBody() {
        this.heightPartsBody.push(this.fbw.group({
            part: [ '' ],
            percentageHeight: [ '' ],
        }));
    }

    /**
     * Delete info height part of body
     */
    deletePartBody(at: number) {
        this.heightPartsBody.removeAt(at);
    }

    /**
     * Update user personal
     */
    updateUser() {

    }


}
