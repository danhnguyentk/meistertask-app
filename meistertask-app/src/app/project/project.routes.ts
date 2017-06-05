import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app/project/:id',
                component: ProjectComponent
            }
        ]
    }
];
