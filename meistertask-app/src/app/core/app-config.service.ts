import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class AppConfig {

    API = {
        ROOT_URL: environment.API_ROOT
    };

    VALIDATION_MESSAGES = {
        required: `<%= name %> is required.`,
        minlength: `<%= name %> must be at least <%= errors.minlength.requiredLength %> characters long.`,
        maxlength: `<%= name %> can not be more than <%= errors.maxlength.requiredLength %> characters long.`
    };
}
