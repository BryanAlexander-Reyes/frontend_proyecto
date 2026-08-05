import { Routes } from '@angular/router';


// importacion del componente login

import { LoginComponent } from './pages/login/login'
import { RegisterComponent } from './pages/register/register'
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UsersComponent } from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
// Definición de rutras de la aplicación 


export const routes: Routes = [
    // ruta principal de la app
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent,
    },
    // Ruta de componente register
    {
        path:'register',
        component:RegisterComponent
    },
    // Ruta del componente de dashboard
    {
        path:'dashboard',
        component: DashboardComponent
    },
    // ruta de componente de usuario
    {
        path:'users',
        component: UsersComponent
    },
    {
        path:'principal',
        component: LayoutComponent
    }
];
