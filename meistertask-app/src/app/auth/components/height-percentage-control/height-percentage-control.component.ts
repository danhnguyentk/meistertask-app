import {
    Component,
    OnInit,
    forwardRef,
    ChangeDetectorRef
} from '@angular/core';
import {
    FormControl,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    ControlValueAccessor,
    Validator,
    ValidatorFn
} from '@angular/forms';

import * as _ from 'lodash';

import { Logger } from '../../../core/common/services/logger.service';
import { heightPercentageValidator } from './height-percentage.validator';
import { HeightAttribute } from '../../models/height-attribute.model';

@Component({
    selector: 'height-percentage-control',
    templateUrl: './height-percentage-control.component.html',
    styleUrls: [ './height-percentage-control.component.scss' ],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HeightPercentageControlComponent), multi: true },
        { provide: NG_VALIDATORS,  useExisting: forwardRef(() => HeightPercentageControlComponent), multi: true }
    ]
})
export class HeightPercentageControlComponent implements OnInit, ControlValueAccessor, Validator {

    percentage: string;
    submitted: boolean;

    propagateChange = (_: any) => {};
    validateFn: ValidatorFn;
    model: HeightAttribute;

    formControl: FormControl;
    internalFormControl: FormControl = new FormControl();

    constructor(
        private logger: Logger,
        private cdf: ChangeDetectorRef) { }

    ngOnInit() {
        this.validateFn = heightPercentageValidator();
    }

    /**
     * Set inital value to DOM
     */
    writeValue(value: HeightAttribute) {
        this.logger.info('Write value:', value);
        this.model = value;
        if (value && value.percentage) {
            this.percentage = value.percentage;
        } else {
            this.percentage = '';
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {

    }

    /**
     * Validate control
     */
    validate(c: FormControl): any {
        this.logger.info('Validate form control percentage: ', c);
        this.formControl = c;
        return this.validateFn(this.formControl);
    }

    onChange(event: any) {
        this.internalFormControl.markAsDirty();
        const newValue: string = event.target.value;
        const newModel: HeightAttribute = _.assignIn({}, this.model, { percentage: newValue });

        // Update the form
        this.propagateChange(newModel);
    }

    markAsSubmitted(valid: boolean) {
        this.submitted = valid;
        // FIXME: why have this command
        // this.cd.detectChanges();
    }

}
