import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
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
