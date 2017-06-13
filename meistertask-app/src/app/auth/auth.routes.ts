import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [ AuthGuard ]
            },
            {
                path: 'signup',
                component: SignupComponent,
                canActivate: [ AuthGuard ]
            },
            {
                path: 'loggedout',
                component: LoggedOutComponent,
                canActivate: [ AuthGuard ]
            }
        ]
    }
];
