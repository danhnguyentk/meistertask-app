import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthRequiredPageGuard } from '../auth/guards/auth-required-page.guard';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app/dashboard',
                component: DashboardComponent,
                canActivate: [ AuthRequiredPageGuard ]
            }
        ]
    }
];
