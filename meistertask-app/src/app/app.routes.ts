import { Routes } from '@angular/router';

import { ROUTES as homeRoutes} from './home/home.routes';
import { ROUTES as authRoutes } from './auth/auth.routes';
import { ROUTES as dashboardRoutes } from './dashboard/dashboard.routes';
import { ROUTES as projectRoutes } from './project/project.routes';
import { PrimaryLayoutComponent } from './shared/components/primary-layout/primary-layout.component';
import { SecondaryLayoutComponent } from './shared/components/secondary-layout/secondary-layout.component';
import { ThirdaryLayoutComponent } from './shared/components/thirdary-layout/thirdary-layout.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'app/dashboard',
        pathMatch: 'full'
    },
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
        component: ThirdaryLayoutComponent,
        children: [
            ...dashboardRoutes
        ]
    },
    {
        path: '',
        component: ThirdaryLayoutComponent,
        children: [
            ...projectRoutes
        ]
    }
];
