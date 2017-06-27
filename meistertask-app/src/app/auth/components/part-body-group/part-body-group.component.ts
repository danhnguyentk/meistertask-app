import {
    Component,
    OnInit,
    forwardRef
} from '@angular/core';
import {
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
    FormArray,
    Validator
} from '@angular/forms';

import { Logger } from '../../../core/common/services/logger.service';
import { FormBuilderWrapper } from '../../../core/form/services/form-builder-wrapper';

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

    constructor(
        private logger: Logger,
        private fbw: FormBuilderWrapper) { }

    ngOnInit() {
    }

    writeValue(obj: any) {
        this.logger.info('Form array value: ', obj);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {

    }

    validate(c: FormArray): any {
        this.formArray = c;
        return null;
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
