import {
    Component,
    OnInit,
    forwardRef,
    Input
} from '@angular/core';
import {
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
    FormArray,
    Validator,
    ValidatorFn
} from '@angular/forms';

import { Logger } from '../../../core/common/services/logger.service';
import { FormBuilderWrapper } from '../../../core/form/services/form-builder-wrapper';
import { partBodyValidator } from './part-body.validator';

@Component({
    selector: 'part-body-group',
    templateUrl: './part-body-group.component.html',
    styleUrls: [ './part-body-group.component.scss' ],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PartBodyGroupComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PartBodyGroupComponent), multi: true }
    ]
})
export class PartBodyGroupComponent implements OnInit, ControlValueAccessor, Validator {
    propagateChange: any = (_: any) => {};
    formArray: FormArray;
    validateFn: ValidatorFn;

    @Input() max: number;
    @Input() legend: string;

    constructor(
        private logger: Logger,
        private fbw: FormBuilderWrapper) { }

    ngOnInit() {
        this.validateFn = partBodyValidator();
    }

    writeValue(obj: any) {
        this.logger.info('Write value form array: ', obj);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {

    }

    validate(c: FormArray): any {
        this.logger.info('Validate on form array: ', c);
        this.formArray = c;
        return this.validateFn(c);
    }

    /**
     * Add one part of body
     */
    onAddPartBody() {
        this.formArray.push(this.fbw.control({
            min: null,
            max: null,
            percentage: null
        }));
    }

    deletePartBody(index: number) {
        this.formArray.removeAt(index);
    }
}
