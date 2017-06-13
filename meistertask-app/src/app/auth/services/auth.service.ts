import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { User } from '../models/user';
import { AppConfig } from '../../core/app-config.service';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { Logger } from '../../core/logger.service';
import { LocalStorageService } from '../../core/local-storage.service';
import { AppState } from '../../interface';
import { getAuthUser } from '../selectors/auth.selectors';
import { AuthActions } from '../actions/auth.actions';

@Injectable()
export class AuthService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig,
        private logger: Logger,
        private store: Store<AppState>,
        private localStorageService: LocalStorageService,
        private authActions: AuthActions) {
        // Get user from localstorage and save to state
        const user: User = this.localStorageService.getCurrentUser();
        store.dispatch(this.authActions.saveUserToState(user));

        // Update localstorage each state change
        store.select(getAuthUser)
            .subscribe((userAuth: User) => {
                if (userAuth) {
                    this.localStorageService.setCurrentUser(userAuth);
                } else {
                    this.localStorageService.removeCurrentUser();
                }
            });
    }

    signup(user: User): Observable<User> {
        user = _.assignIn({}, user, { id: user.workName });
        return this.httpWrapperService.post(this.appConfig.API.USER, user);
    }

    login(user: User): Observable<User> {
        return this.httpWrapperService.get(this.appConfig.API.USER, { email: user.email })
            .switchMap((useresRes: User[]) => {
                this.logger.debug('User res when login:', useresRes, user);

                // Check info user and compare with email and password user type
                if (useresRes.length && useresRes[0].email === user.email && useresRes[0].password === user.password) {
                    return Observable.of(useresRes[0]);
                } else {
                    return  Observable.throw({ statusCode: 105, statusMessage: 'Email or password not correct' });
                }
            });
    }

}
