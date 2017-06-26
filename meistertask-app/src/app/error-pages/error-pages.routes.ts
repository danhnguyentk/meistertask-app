import { Routes } from '@angular/router';

import { ErrorPagesComponent } from './components/error-pages/error-pages.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '400',
                component: ErrorPagesComponent,
                data: {
                    type: '400',
                    message: 'Sorry, something went wrong :(',
                    warning: 'Your browsers sent a request server could not understand.',
                    backHome: true
                }
            },
            {
                path: '403',
                component: ErrorPagesComponent,
                data: {
                    type: '400',
                    message: 'Sorry, access denied :(',
                    warning: 'You don’t have permission to open this page.',
                    backHome: true
                }
            },
            {
                path: '500',
                component: ErrorPagesComponent,
                data: {
                    type: '500',
                    message: 'Sorry, something went wrong :(',
                    warning: 'Your request couldn’t be completed. Please try again later.'
                }
            },
            {
                path: '503',
                component: ErrorPagesComponent,
                data: {
                    type: '503',
                    message: 'Sorry, something went wrong :(',
                    warning: 'The service you requested is not available at that time.',
                    backHome: true
                }
            }
        ]
    },
    {
        path: '**',
        component: ErrorPagesComponent,
        data: {
            type: '404',
            message: 'Sorry, page not found :(',
            warning: 'The page you were looking for can not be found on this server.',
            backHome: true
        }
    }
];
