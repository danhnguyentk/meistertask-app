import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

import { User } from '../models/user';
import { AppConfig } from '../../core/common/services/app-config.service';
import { LocalStorageService } from '../../core/common/services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { HttpWrapperService } from '../../core/common/services/http-wrapper.service';

@Injectable()
export class AuthPrivatePageGuard implements CanActivate {
    constructor(
        private router: Router,
        private appConfig: AppConfig,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private httpWrapperService: HttpWrapperService
        ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.handleRedirectpage();
    }

    handleRedirectpage() {
        const user: User = this.httpWrapperService.getCurrentUser();
        if (!user) {
            this.router.navigateByUrl(this.appConfig.ROUTES.LOGIN);
            return false;
        }
        return true;
    }
}
