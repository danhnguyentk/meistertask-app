import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

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
        required: `<%= name %> is required.`,
        [this.VALIDATION_KEY.EMAIL] : 'Please enter a valid email address',
        minlength: `<%= name %> must be at least <%= errors.minlength.requiredLength %> characters long.`,
        maxlength: `<%= name %> can not be more than <%= errors.maxlength.requiredLength %> characters long.`
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

}
