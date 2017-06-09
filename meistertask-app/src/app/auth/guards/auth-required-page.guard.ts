import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { AppConfig } from '../../core/app-config.service';
import { LocalStorageService } from '../../core/local-storage.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthRequiredPageGuard implements CanActivate {
    constructor(
        private router: Router,
        private appConfig: AppConfig,
        private localStorageService: LocalStorageService,
        private authService: AuthService
        ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.handleRedirectpage();
    }

    handleRedirectpage() {
        const user: User = this.localStorageService.getCurrentUser();
        if (!user) {
            this.router.navigateByUrl(this.appConfig.ROUTES.LOGIN);
            return false;
        }
        return true;
    }
}
