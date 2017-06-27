import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable()
export class AppConfig {

    API = {
        ROOT_URL: environment.API_ROOT,
        USER: 'api/user',
        PROJECT: 'api/project',
        TASK: 'api/task'
    };

    VALIDATION_KEY = {
        EMAIL: 'invalidEmail'
    };

    VALIDATION_MESSAGES = {
        invalidConfirmPassword: 'The confirm password does\'t match',
        required: `<%= name %> is required.`,
        [this.VALIDATION_KEY.EMAIL] : 'Please enter a valid email address',
        minlength: `<%= name %> must be at least <%= errors.minlength.requiredLength %> characters long.`,
        maxlength: `<%= name %> can not be more than <%= errors.maxlength.requiredLength %> characters long.`,
        percentage: 'The total must 100%',
        invalidNewPassword: 'The new password should\'t same the old password'
    };

    // Pattern validate
    VALIDATIONS = {
        EMAIL_PATTERN: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };

    ROUTES = {
        LOGIN: '/login',
        SIGNUP: '/signup',
        DASHBOARD: '/app/dashboard',
        LOGGED_OUT: '/loggedout',
        PROJECT: '/app/project'
    };

    MOVE_TASK = 'YOU JUST MOVE TASK';

    CONFIRM_MESSAGE = {
        DELETE_TASK: 'Are you want to delete this task?'
    };

    PERSONAL_VALIDATION_MESSAGES = {
        RANGE_OVERLAPPED: 'Unit or Unit Range should be not overlapped.',
        MIN_MAX_COMPARE: 'First number should be lower than second number.',
        NON_NEGATIVE_RANGE: 'Unit or Unit Range is non-negative integer.',
        PERCENTAGE_VALIDATION: 'Height Percentage cannot exceed 100.',
        PERCENTAGES_VALIDATION: 'The total of Height Percentage must be added up to 100.',
        MAXIMUM_MSG: 'cannot exceed',
        WRONG_FORMAT: 'Invalid format.',
        VALUE_POSITIVE: 'The value should be positive integer.',
        UNIT_POSITIVE: 'Unit should be positive.',
        SAVE_SUCCESSFULLY: 'Personal user has been saved.',
        SAVE_FAIL: 'There was an error, please try again later.',
        REQUIRED: 'This field is required.'
    };

}
