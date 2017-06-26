import { Routes } from '@angular/router';

import { ROUTES as homeRoutes} from './home/home.routes';
import { ROUTES as authRoutes } from './auth/auth.routes';
import { ROUTES as dashboardRoutes } from './dashboard/dashboard.routes';
import { ROUTES as projectRoutes } from './project/project.routes';
import { ROUTES as errorRoutes } from './error-pages/error-pages.routes';
import { PrimaryLayoutComponent } from './core/layout/components/primary-layout/primary-layout.component';
import { SecondaryLayoutComponent } from './core/layout/components/secondary-layout/secondary-layout.component';

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
    },
    {
        path: '',
        children: [
            ...projectRoutes
        ]
    },
    {
        path: '',
        children: [
            ...errorRoutes
        ]
    }
];
