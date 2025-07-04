import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../features/dashboard/pages/home/home.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default layoutRoutes;
