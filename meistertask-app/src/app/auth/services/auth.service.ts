import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { AppConfig } from '../../core/app-config.service';
import { HttpWrapperService } from '../../core/http-wrapper.service';

@Injectable()
export class AuthService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig) { }

    signup(user: User): Observable<User> {
        return this.httpWrapperService.post(this.appConfig.API.SINGUP, user);
    }

}
