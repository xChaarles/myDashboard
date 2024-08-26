import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
        {
            path: 'change-detection',
            title: 'Deteccion de Cambios',
            loadComponent: () => import ('./dashboard/pages/change-detection/change-detection.component'), 
        },
        {
            path: 'control-flow',
            title: 'Control Flow',
            loadComponent: () => import ('./dashboard/pages/control-flow/control-flow.component')
        },
        {
            path: 'defer-options',
            title: 'Diferir Opciones',
            loadComponent: () => import ('./dashboard/pages/defer-options/defer-options.component')
        },
        {
            path: 'defer-views',
            title: 'Diferir Vistas',
            loadComponent: () => import ('./dashboard/pages/defer-views/defer-views.component')
        },
        {
            path: 'User/id',
            title: 'Vistas de Usuarios',
            loadComponent: () => import ('./dashboard/pages/user/user.component')
        },
        {
            path: 'user-list',
            title: 'Lista de Usuarios',
            loadComponent: () => import ('./dashboard/pages/users/users.component')
        },
        {
            path: 'view-transition',
            title: 'Ver Transicion',
            loadComponent: () => import ('./dashboard/pages/view-transition/view-transition.component')
        },
        {
            path: '',
            redirectTo: 'control-flow',
            pathMatch: 'full',
        }
    ]
},
{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}
];
