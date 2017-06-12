import { Routes } from '@angular/router';

import { ROUTES as homeRoutes} from './home/home.routes';
import { ROUTES as authRoutes } from './auth/auth.routes';
import { ROUTES as dashboardRoutes } from './dashboard/dashboard.routes';
import { ROUTES as projectRoutes } from './project/project.routes';
import { PrimaryLayoutComponent } from './shared/components/primary-layout/primary-layout.component';
import { SecondaryLayoutComponent } from './shared/components/secondary-layout/secondary-layout.component';
import { ThirdaryLayoutComponent } from './shared/components/thirdary-layout/thirdary-layout.component';
import { FourthLayoutComponent } from './shared/components/fourth-layout/fourth-layout.component';

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
    }
];
