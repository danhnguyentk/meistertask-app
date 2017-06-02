import { Injectable } from '@angular/core';

import * as _  from 'lodash';
import { Observable } from 'rxjs/Observable';
import {} from 'rxjs/ErrorObs'

import { User } from '../models/user.model';
import { AppConfig } from '../../core/app-config.service';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { Logger } from '../../core/logger.service';

@Injectable()
export class AuthService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig,
        private logger: Logger) { }

    signup(user: User): Observable<User> {
        _.assignIn(user, { id: user.workName });
        return this.httpWrapperService.post(this.appConfig.API.USER, user);
    }

    login(user: User): Observable<User> {
        return this.httpWrapperService.get(this.appConfig.API.USER, { email: user.email })
            .switchMap((useresRes: User[]) => {
                this.logger.debug('User res when login:', useresRes, user);
                if (useresRes.length && useresRes[0].email === user.email && useresRes[0].password === user.password) {
                    return Observable.of(useresRes[0]);
                } else {
                    return  Observable.throw({ statusCode: 105, statusMessage: 'Email or password not correct' });
                }
            });
    }

}
