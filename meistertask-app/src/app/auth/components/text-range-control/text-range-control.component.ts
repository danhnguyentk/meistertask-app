import {
    Component,
    OnInit,
    forwardRef
} from '@angular/core';
import {
    FormControl,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    ControlValueAccessor,
    Validator
} from '@angular/forms';

import * as _ from 'lodash';

import { Logger } from '../../../core/common/services/logger.service';
import { FormBuilderWrapper } from '../../../core/form/services/form-builder-wrapper';
import { HeightAttribute } from '../../models/height-attribute.model';

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
    namePart: string;
    propagateChange = (_: any) => {};
    control: FormControl;
    model: HeightAttribute;

    constructor(
        private logger: Logger,
        private fbw: FormBuilderWrapper) { }

    ngOnInit() {
    }

    /**
     * Set inital value to DOM
     */
    writeValue(value: HeightAttribute) {
        // Doing in here
        // this.model = value;
        // if (value) {
        //     if (value.min && value.max) {
        //         this.range = `${value.min}-${value.max}`;
        //         this.model.min = <any>`${this.model.min}`;
        //         this.model.max = <any>`${this.model.max}`;
        //     } else if (value.min) {
        //         this.range = `${value.min}`;
        //         this.model.min = <any>`${this.model.min}`;
        //     } else if (value.max) {
        //         this.range = `${value.max}`;
        //         this.model.max = <any>`${this.model.max}`;
        //     }
        // } else {
        //     this.range = '';
        // }
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
        this.control = c;
        this.logger.info(this.control);
        return {
            range: { message:
                'Error rorroror'
            }
        };
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
        let newValue = event.target.value;

        let { min, max } = this.getRangeValueFromText(newValue);
        let newModel: HeightAttribute = _.assignIn(this.model, {
            min: min,
            max: max
        });

        // Update the form
        this.propagateChange(newModel);
    }

}
