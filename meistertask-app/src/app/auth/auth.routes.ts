import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthPublicPageGuard } from './guards/auth-public-page.guard';
import { AuthPrivatePageGuard } from './guards/auth-private-page.guard';
import { PersonalComponent } from './personal.component';
import { ChangePasswordComponent } from './change-password.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [ AuthPublicPageGuard ]
            },
            {
                path: 'signup',
                component: SignupComponent,
                canActivate: [ AuthPublicPageGuard ]
            },
            {
                path: 'account/change-password',
                component: ChangePasswordComponent,
                canActivate: [ AuthPrivatePageGuard ]
            },
            {
                path: 'loggedout',
                component: LoggedOutComponent,
                canActivate: [ AuthPublicPageGuard ]
            },
            {
                path: 'account/personal',
                component: PersonalComponent,
                canActivate: [ AuthPrivatePageGuard ]
            }
        ]
    }
];
