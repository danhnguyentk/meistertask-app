import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
} from '@angular/router';

import { Store } from '@ngrx/store';

import { AppState } from '../../interface';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private store: Store<AppState>) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.handleRedirectPage(url);
    }

    handleRedirectPage(url: string): boolean {
        return null;
    }

}
