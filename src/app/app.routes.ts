import { RedirectCommand, Routes } from '@angular/router';


// importacion del componente login

import { LoginComponent } from './pages/login/login'
import { RegisterComponent } from './pages/register/register'
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UsersComponent } from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './guards/auth-guard';
import { ContenidoDinamicoComponet } from './pages/contenido-dinamico/contenido-dinamico';
// Definición de rutras de la aplicación 


export const routes: Routes = [
    // ruta principal de la app
    {
        path: '',
        component: LayoutComponent,
        canActivate:[
            authGuard
        ],
        children: [{
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'users',
            component: UsersComponent
        },
        {
            path:'contenido',
            component:ContenidoDinamicoComponet
        }
      ]
    },

    // Ruta del componente login

    {
        path: 'login',
        component: LoginComponent
    },

    // Ruta del componente register
    {
        path: 'register',
        component: RegisterComponent
    }
];
