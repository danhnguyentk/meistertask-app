import {
    FormControl,
    AbstractControl,
    FormArray
} from '@angular/forms';

import * as _ from 'lodash';

export function partBodyValidator() {

    function isEmptyValue(value): boolean {
        return _.isNil(value) || (_.isEmpty(value) && !_.isNumber(value));
    }

    function isPointInRange(point: number, controlValue): boolean {
        if (isEmptyValue(controlValue.max)) {
            return false;
        }
        if (+point > +controlValue.min && +point < +controlValue.max) {
            return true;
        }
        return false;
    }

    /**
     * Check range control valid
     */
    function isControlRangeValid(control: AbstractControl, exceptionsList: string[]): boolean {
        if (!_.isNil(control.errors)) {
            const keysErr: string[] = Object.keys(control.errors);
            return _.every(keysErr, (key: string) => {
                return _.includes(exceptionsList, key);
            });
        }
        return true;
    }

    /**
     * Check  range value of this control inside another control
     */
    function isRangeControlInsideAnotherOne(controlValue, controlRangeValue, controlValid, controlRangeValid): boolean {
        if (controlValid && controlRangeValid) {
            if (isEmptyValue(controlValue.max) && !isEmptyValue(controlRangeValue.max)) {
                return isPointInRange(controlValid.min, controlRangeValue);
            } else if (!isEmptyValue(controlValue.max) && isEmptyValue(controlRangeValue.max)) {
                return isPointInRange(controlRangeValue.min, controlValue);
            }

            if (+controlValue.min <= +controlRangeValue.min
                && +controlValue.max > +controlValue.min) {
                return true;
            } else if (+controlValue.min > +controlRangeValue.min
                && +controlValue.min < +controlRangeValue.max) {
                return true;
            }
        }
        return false;
    }

    /**
     * Calculate total percentage all controls
     * @param {list} list control value
     */
    function totalPercentage(list: any[]): number {
        return _.reduce(list, (sumPercentage: number, item: any) => {
            let percentage = 0;
            if (item && item.percentage && !isNaN(Number(+item.percentage))) {
                percentage = +item.percentage;
            }
            return sumPercentage + percentage;
        }, 0);
    }

    /**
     * Set specific error for control
     */
    function setErrorForControl(control: AbstractControl, fieldName: string, message: string) {
        let errors = _.assignIn({}, control.errors, {
            [fieldName]: { message }
        });
        control.setErrors(errors);
    }

    /**
     * Set specific error for controls
     */
    function setErrorForControls(controls: any, fieldName: string, message: string) {
         _.each(controls, (control: any) => {
            setErrorForControl(control, fieldName, message);
        });
    }


    /**
     * Delete specify error for control
     * @param {fieldName} name property delete in object error of control
     */
    function deleteErrorForControl(control: AbstractControl, fieldName: string) {
        let errors = control.errors;
        if (errors && errors.hasOwnProperty(fieldName)) {
            delete errors[fieldName];
        }
        if (errors
            && Object.keys(errors).length > 0
            && errors.constructor === Object) {
            errors = _.assignIn({}, errors);
        } else {
            errors = null;
        }
        control.setErrors(errors);
    }

    /**
     * Delete specific error for controls
     * @param {fieldName} name property delete in object error of control
     */
    function deleteErrorForControls(controls: any, fieldName: string) {
        _.each(controls, (control: any) => {
            deleteErrorForControl(control, fieldName);
        });
    }

    /**
     * Get errors for child controls
     */
    function getErrorsChildControl(errors: any, fieldName: string): Object {
        if (errors && errors.hasOwnProperty(fieldName)) {
            delete errors[fieldName];
        }
        if (errors
            && Object.keys(errors).length > 0
            && errors.constructor === Object) {
            return _.assignIn({}, errors);
        }
        return null;
    }

    return (c: FormArray) => {
        const sumPercentageFinal = totalPercentage(c.value);
        if (sumPercentageFinal !== 100) {
            setErrorForControls(c.controls, 'sumPercentage', 'The total of Portfolio Percentage must be added up to 100.');
        } else {
            deleteErrorForControls(c.controls, 'sumPercentage');
        }

        const controlList: AbstractControl[] = c.controls;
        _.forEach(controlList, (control: AbstractControl, index: number) => {
            if (isControlRangeValid(control, [ 'sumPercentage', 'percentage' ])) {
                // FIXME: Doing now
            }
            // _.forEach(controlList.slice(index + 1))
        });



        return null;
    };

    // return (c: FormGroup) => {

    //     let error = null;

    //     if (!isBulletData(c.value)) {
    //         let sumPercentageFinal = totalPercentage(c.value);
    //         if (sumPercentageFinal !== 100) {
    //             setErrorForControls(c.controls, 'sumPercentage', 'The total of Portfolio Percentage must be added up to 100.');
    //         } else {
    //             _.each(c.controls, (control: any) => {
    //                 control.setErrors(getErrorsChildControl(control.errors, 'sumPercentage'));
    //             });
    //         }
    //         let list = _.cloneDeep(c.value);
    //         let inRangeErrorIdxs = [];

    //         _.each(c.controls, (c: FormControl) => {
    //             c.setErrors(getErrorsChildControl(c.errors, 'inRange'));
    //         });

    //         _.each(c.value, (item: any, idx: number) => {
    //             let isInRange = false;
    //             let destInRangeControlError: number = -1;

    //             _.each(list, (itemList: any, idxList: number) => {
    //                 if (idx !== idxList && !isInRange) {
    //                     isInRange = isRangeControlInsideAnotherOne(
    //                         getRatingValue(c.controls[idx].value),
    //                         getRatingValue(c.controls[idxList].value),
    //                         isControlRangeValid(c.controls[idx], [ 'sumPercentage', 'percentage', 'inRange' ]),
    //                         isControlRangeValid(c.controls[idxList], [ 'sumPercentage', 'percentage', 'inRange' ])
    //                     );
    //                     destInRangeControlError = idxList;
    //                 }
    //             });

    //             if (isInRange) {
    //                 // Add in range error
    //                 setErrorForControl(c.controls[idx], 'inRange', 'Unit Range should be not overlapped.');
    //                 setErrorForControl(c.controls[destInRangeControlError], 'inRange', 'Unit Range should be not overlapped.');
    //                 inRangeErrorIdxs.push(idx);
    //                 inRangeErrorIdxs.push(destInRangeControlError);
    //             }
    //         });
    //     }
    //     return error;
    // };
}
