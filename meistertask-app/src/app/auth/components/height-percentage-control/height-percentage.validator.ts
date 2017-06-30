import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

export function heightPercentageValidator() {

    function isEmptyValue(value: any): boolean {
        return _.isNil(value) || (_.isEmpty(value) && !_.isNumber(value));
    }

    function isNumber(value: any): boolean {
        return !isEmptyValue((value)) && _.isNumber(+value);
    }

    function isInteger(value: any): boolean {
        return isNumber(value) && _.isInteger(+value);
    }

    return (c: FormControl) => {
        let percentageValue = c.value.percentage;
        let error: any;
        let percentageMessage: string;
        let isValidFormat = /^0*(?:[1-9][0-9]?|100)$/.test(percentageValue);
        if (isEmptyValue(percentageValue)) {
            percentageMessage = 'This field is required';
        } else if (isInteger(percentageValue) && +percentageValue <= 0 || c.value > 100) {
            percentageMessage = 'Height percentage should greater than 0 and cannot exceed 100.';
        } else if (!isValidFormat) {
            percentageMessage = 'Height percentage should be an integer, greater than 0 and cannot exceed 100.';
        }
        if (percentageMessage) {
            error = {
                percentage: {
                    message: percentageMessage
                }
            };
        }
        return error;
    };

}
