import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import { AppConfig } from './app-config.service';

@Injectable()
export class ValidationMessage {

    constructor(private appConfig: AppConfig) { }

    /**
     * Get validator message of control
     */
    getValidatorMessage(control: FormControl, nameControl: string, nameError: string): string {
        if (!_.has(this.appConfig.VALIDATION_MESSAGES, nameError)) {
            throw Error(`The validation message in AppConfig not contain '{nameError}' error`);
        }
        const messageTemplate = this.appConfig.VALIDATION_MESSAGES[nameError];

        // Build data form message template error
        const data = {
            name: nameControl,
            value: control.value,
            errors: control.errors
        };

        return _.template(messageTemplate)(data);
    }

}
