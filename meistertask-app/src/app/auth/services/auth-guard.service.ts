import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { AppState } from '../../interface';
import { getAuthStatus } from '../reducers/auth.selectors';
import { LocalStorageService } from '../../core/local-storage.service';
import { AppConfig } from '../../core/app-config.service';
import { User } from '../models/user';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private store: Store<AppState>,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private appConfig: AppConfig,
        private authActions: AuthActions) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> {
        const url: string = state.url;
        return this.handleRedirectPage(url);
    }

    handleRedirectPage(url: string): boolean | Observable<boolean> {
        // console.log('aaa');
        console.log(url);
        const user: User = this.localStorageService.getCurrentUser();
        // if (!user && public_page) {
        //     return true;
        // }
        // if (!user && requiepage) {
        //     this.router.navigateByUrl(this.appConfig.ROUTES.LOGIN);
        //     return false;
        // }
        return this.store.select(getAuthStatus)
            .switchMap((isAuthenticated: boolean) => {
                // If user loged in and
                if (isAuthenticated && url === '/login' || url === '/signup') {
                    this.router.navigateByUrl(this.appConfig.ROUTES.DASHBOARD);
                    return Observable.of(false);
                }
                if (isAuthenticated && _.some(this.appConfig.PRIVATE_PAGES, url)) {
                    return Observable.of(true);
                }
                const user: User = this.localStorageService.getCurrentUser();
                if (!user && _.some(this.appConfig.PUBLIC_PAGES, url)) {
                    return Observable.of(true);
                }
                if (!user && _.some(this.appConfig.PRIVATE_PAGES, url)) {
                    this.router.navigateByUrl('/login');
                    return Observable.of(false);
                }

                return this.authService.login(user)
                    .map((userRes : User) => {
                        this.store.dispatch(this.authActions.loginSuccess(userRes));
                        return true;
                    })
                    .catch(() => Observable.of(false));
            });
    }

}
