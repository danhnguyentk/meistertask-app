import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import { AppConfig } from '../../../core/common/services/app-config.service';

export function textRangeValidator(maximum: number, legend: string, appConfig: AppConfig) {

    function buildErrorMessage(message: string) {
        let err = null;
        if (message) {
            err = {};
            if (message) {
                err['range'] = {
                    message: message
                };
            }
        }
        return err;
    }

    function isEmptyValue(value: any): boolean {
        return _.isNil(value) || (_.isEmpty(value) && !_.isNumber(value));
    }

    function isNumber(value: any): boolean {
        return !isEmptyValue((value)) && _.isNumber(+value);
    }

    function isInteger(value: any): boolean {
        return isNumber(value) && _.isInteger(+value);
    }

    // function isPositiveInteger(value: any): boolean {
    //     return isInteger(value) && +value > 0;
    // }

    function isPositiveNumber(value: any): boolean {
        return isNumber(value) && +value > 0;
    }

    function isIntegerGreaterOrEqualZero(value: any): boolean {
        return isInteger(value) && +value >= 0;
    }

    function isEqualToZero(value: any): boolean {
        return isInteger(value) && +value === 0;
    }

    function isValidRange(min, max): boolean {
        return isIntegerGreaterOrEqualZero(min)
            && isIntegerGreaterOrEqualZero(max)
            && +min < +max;
    }

    function isNegativeNum(value: any): boolean {
        let regex: RegExp = /^-{1}\d+$/;
        return regex.test(value);
    }

    function isOverUpperLimit(value, maximun) {
        return +value > +maximum;
    }

    // FIXME: not know
    function isValidFormat(min, max) {
        // Cannot use empty just because will fail in case '1-'
        // ==> min: "1", max: ''
        // Case '1'
        // ==> min: "1", max: null
        let value = '';
        if (!_.isNil(min)
            && !_.isNil(max)) {
            value = `${min}-${max}`;
        } else if (!_.isNil(min)) {
            value = min;
        } else if (!_.isNil(max)) {
            value = `-${max}`;
        }
        let regex = /^\d+(\-{1}\d+){0,1}$/;
        return regex.test(value);
    }

    return (c: FormControl) => {
        if (isEmptyValue(c.value.min) && _.isNil(c.value.max)) {
            return buildErrorMessage(appConfig.PERSONAL_VALIDATION_MESSAGES.REQUIRED);
        }

        // Min is number but not positive number, max is null (empty)
        if (!isEmptyValue(c.value.min)
            && isEmptyValue(c.value.max)
            && isNumber(c.value.min)
            && !isPositiveNumber(c.value.min)) {
            if (isNegativeNum(c.value.min) || isEqualToZero(c.value.min)) {
                return buildErrorMessage((appConfig.PERSONAL_VALIDATION_MESSAGES.UNIT_POSITIVE));
            } else {
                return buildErrorMessage(appConfig.PERSONAL_VALIDATION_MESSAGES.WRONG_FORMAT);
            }
        }

        // Min, max is not empty and no valid range
        if (!isEmptyValue(c.value.min)
            && !isEmptyValue(c.value.max)
            && isIntegerGreaterOrEqualZero(c.value.max)
            && !isValidRange(c.value.min, c.value.max)) {
            return buildErrorMessage(appConfig.PERSONAL_VALIDATION_MESSAGES.MIN_MAX_COMPARE);
        }

    };

    // return (c: FormControl) => {
    //     if (isEmptyValue(c.value.min)
    //         && _.isNil(c.value.max)) {
    //         return buildErrorMessage(appConfig.ATTRIBUTE_VALIDATION_MESSAGES.REQUIRED);
    //     }

    //     // Min is number but not positive number, max is null (empty)
    //     if (!isEmptyValue(c.value.min)
    //         && isEmptyValue(c.value.max)
    //         && isNumber(c.value.min)
    //         && !isPositiveNumber(c.value.min)) {
    //         if (isNegativeNum(c.value.min) || isEqualToZero(c.value.min)) {
    //             return buildErrorMessage(appConfig.ATTRIBUTE_VALIDATION_MESSAGES.UNIT_POSITIVE);
    //         } else {
    //             return buildErrorMessage(appConfig.ATTRIBUTE_VALIDATION_MESSAGES.WRONG_FORMAT);
    //         }
    //     }

    //     // Min, max is not empty and no valid range
    //     if (!isEmptyValue(c.value.min)
    //         && !isEmptyValue(c.value.max)
    //         && isIntegerGreaterOrEqualZero(c.value.max)
    //         && !isValidRange(c.value.min, c.value.max)) {
    //         return buildErrorMessage(appConfig.ATTRIBUTE_VALIDATION_MESSAGES.MIN_MAX_COMPARE);
    //     }

    //     // Display error if invalid format
    //     if (!isValidFormat(c.value.min, c.value.max)) {
    //         return buildErrorMessage(appConfig.ATTRIBUTE_VALIDATION_MESSAGES.WRONG_FORMAT);
    //     } else if (isOverUpperLimit(c.value.min, maximum)
    //             || (!isEmptyValue(c.value.max) && isOverUpperLimit(c.value.max, maximum))) {
    //         // Valid format but exceed data
    //         return buildErrorMessage(`${ legend } ${ appConfig.ATTRIBUTE_VALIDATION_MESSAGES.MAXIMUM_MSG } ${ maximum }.`);
    //     }

    //     return null;
    // };

}
