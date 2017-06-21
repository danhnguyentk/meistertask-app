import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthPrivatePageGuard } from '../auth/guards/auth-private-page.guard';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app/dashboard',
                component: DashboardComponent,
                canActivate: [ AuthPrivatePageGuard ]
            }
        ]
    }
];
