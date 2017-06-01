import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'loggedout',
                component: LoggedOutComponent
            }
        ]
    }
];
