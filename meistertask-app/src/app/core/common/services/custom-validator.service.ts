import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppConfig } from './app-config.service';

@Injectable()
export class CustomValidator {

    constructor(private appConfig: AppConfig) { }

    validatePattern (input: FormControl, regExp: RegExp, key: string) {
        if (!input.value || regExp.test(input.value)) {
            return null;
        } else {
            return {
                [key]: {
                    valid: false
                }
            };
        }
    }

    validateEmail() {
        return (input: FormControl) => {
            const regExp: RegExp = this.appConfig.VALIDATIONS.EMAIL_PATTERN;
            const validateKey: string = this.appConfig.VALIDATION_KEY.EMAIL;
            return this.validatePattern(input, regExp, validateKey);
        };
    }

}
