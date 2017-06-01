import { Routes } from '@angular/router';

import { ROUTES as homeRoutes} from './home/home.routes';
import { ROUTES as authRoutes } from './auth/auth.routes';
import { ROUTES as dashboardRoutes } from './dashboard/dashboard.routes';
import { PrimaryLayoutComponent } from './shared/components/primary-layout/primary-layout.component';
import { SecondaryLayoutComponent } from './shared/components/secondary-layout/secondary-layout.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PrimaryLayoutComponent,
        children: [
            ...homeRoutes
        ]
    },
    {
        path: '',
        component: SecondaryLayoutComponent,
        children: [
            ...authRoutes
        ]
    },
    {
        path: '',
        children: [
            ...dashboardRoutes
        ]
    }
];
