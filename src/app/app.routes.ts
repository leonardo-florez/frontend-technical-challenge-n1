import { Routes } from '@angular/router';
import { NotAuthGuard } from './features/auth/guards/not-auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login/login.component'),
    },
    {
        path: '',
        canMatch: [NotAuthGuard],
        loadChildren: () => import('./layout/layout.routes')
    },
    {
        path: '**',
        redirectTo: '',
    },
];
