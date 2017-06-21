import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthPublicPageGuard } from './guards/auth-public-page.guard';

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
                path: 'loggedout',
                component: LoggedOutComponent,
                canActivate: [ AuthPublicPageGuard ]
            }
        ]
    }
];
