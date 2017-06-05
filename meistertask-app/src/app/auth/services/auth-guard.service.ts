import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
} from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../interface';
import { getAuthStatus } from '../store/auth.selectors';
import { LocalStorageService } from '../../core/local-storage.service';
import { User } from '../models/user';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private store: Store<AppState>,
        private localStorage: LocalStorageService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.handleRedirectPage(url);
    }

    handleRedirectPage(url: string): boolean {
        this.store.select(getAuthStatus)
            .subscribe((isAuthenticated: boolean) => {

            });
        return null;
    }

}
