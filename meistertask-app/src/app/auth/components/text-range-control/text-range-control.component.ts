import {
    Component,
    OnInit,
    Input,
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
import { AppConfig } from '../../../core/common/services/app-config.service';
import { FormBuilderWrapper } from '../../../core/form/services/form-builder-wrapper';
import { HeightAttribute } from '../../models/height-attribute.model';
import { textRangeValidator } from './text-range.validator';

@Component({
    selector: 'text-range-control',
    templateUrl: './text-range-control.component.html',
    styleUrls: [ './text-range-control.component.scss' ],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextRangeControlComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => TextRangeControlComponent), multi: true }
    ]
})
export class TextRangeControlComponent implements OnInit, ControlValueAccessor, Validator {
    @Input() maximum: number;
    @Input() legend: string;

    range: string;
    submitted: boolean;

    propagateChange = (_: any) => {};
    validateFn: ValidatorFn;

    internalFormControl: FormControl = new FormControl();
    formControl: FormControl;
    model: HeightAttribute;


    constructor(
        private logger: Logger,
        private fbw: FormBuilderWrapper,
        private appConfig: AppConfig,
        private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.validateFn = textRangeValidator(this.maximum, this.legend, this.appConfig);
    }

    /**
     * Set inital value to DOM
     */
    writeValue(value: HeightAttribute) {
        this.model = value;
        if (value && value.min) {
            if (value.max) {
                this.range = `${value.min}-${value.max}`;
            } else {
                this.range = `${value.min}`;
            }
        } else {
            this.range = '';
            this.model.min = '';
            this.model.max = '';
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
        this.formControl = c;
        this.logger.info('Form control Range: ', this.formControl);
        return this.validateFn(c);
    };

    getRangeValueFromText(newValue: string): any {
        let newValueArr = _.split(newValue, '-');
        let min: string;
        let max: string;
        if (_.size(newValueArr) === 1) { // Case 3, '', abc
            min = newValueArr[0];
        } else if (_.size(newValue) >= 2) {
            // Case -0d => [ '', '0d' ]
            // Case -02 => [ '-02', null ]
            min = _.first(newValueArr);
            max = _.join(newValueArr.slice(1), '-');

            if (_.isEmpty(min) && Number(max)) {
                min = `-${max}`;
                max = null;
            }
        }
        return { min, max };
    }

    onRangeChange(event) {
        this.internalFormControl.markAsDirty();
        let newValue = event.target.value;
        let { min, max } = this.getRangeValueFromText(newValue);
        let newModel: HeightAttribute = _.assignIn(this.model, {
            min: min,
            max: max
        });

        // Update the form
        this.propagateChange(newModel);
    }

    markAsSubmitted(valid: boolean) {
        this.submitted = valid;
        // FIXME: why have this command
        // this.cd.detectChanges();
    }

}
