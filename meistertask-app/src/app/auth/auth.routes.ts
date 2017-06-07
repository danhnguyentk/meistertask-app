import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [ AuthGuardService ]
            },
            {
                path: 'signup',
                component: SignupComponent,
                canActivate: [ AuthGuardService ]
            },
            {
                path: 'loggedout',
                component: LoggedOutComponent,
                canActivate: [ AuthGuardService ]
            }
        ]
    }
];
