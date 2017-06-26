import { Injectable } from '@angular/core';
import {
    FormBuilder,
    FormArray,
    FormGroup,
    FormControl,
    ValidatorFn,
    AsyncValidatorFn
} from '@angular/forms';

import * as _ from 'lodash';

@Injectable()
export class FormBuilderWrapper {

    constructor(private fb: FormBuilder) {}

    /**
     * Define form control from controls config
     */
    group(controlsConfig: {[key: string]: any}, extra?: {[key: string]: any}): FormGroup {
        return this.fb.group(controlsConfig, extra);
    }

    /**
     * Defind control from form state
     */
    control(
        formState: Object,
        validator?: ValidatorFn|ValidatorFn[],
        asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]): FormControl {
        return this.fb.control(formState, validator, asyncValidator);
    }

    /**
     * Defind form array from controls config
     */
    array(controlsConfig: any[], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn): FormArray {
        return this.fb.array(controlsConfig, validator, asyncValidator);
    }

    /**
     * Add control to form array for dynamic form
     */
    addControlToFormArray(formArray: FormArray, control: FormControl | FormGroup) {
        formArray.push(control);
    }

    /**
     * Remove control from form array at index position
     */
    removeControlFromFormArray(formArray: FormArray, at: number) {
        formArray.removeAt(at);
    }

    /**
     * Build form array contain multiple form group
     */
    buildNestedFieldFormArray(
        controlsConfig: any[],
        validator: ValidatorFn = null,
        asyncValidator: AsyncValidatorFn = null): FormArray {
        let newFormArray: FormArray = this.array([]);
        _.each(controlsConfig, item => {
            let formGroup: FormGroup = this.group({});
            _.each(item, (value: any, key: string) => {
                let formControl: FormControl = this.control(value);
                formGroup.addControl(key, formControl);
            });
            newFormArray.push(formGroup);
        });
        return newFormArray;
    }
}
