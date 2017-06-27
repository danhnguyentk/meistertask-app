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
    Validator
} from '@angular/forms';

import { Logger } from '../../../core/common/services/logger.service';

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
    percentateValue: string;
    propagateChange = (_: any) => {};
    control: FormControl;

    constructor(
        private logger: Logger,
        private cdf: ChangeDetectorRef) { }

    ngOnInit() {
    }

    /**
     * Set inital value to DOM
     */
    writeValue(value: string) {
        this.logger.info('Write value:', value);
        this.percentateValue = '5';
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
        this.logger.info('Value form control percentage: ', c.value);
        this.control = c;
        return {
            percentage: {
                message: 'Percentage error'
            }
        };
    }

    onChange(value: string) {
        this.propagateChange(value);
    }

}
