import { Routes } from '@angular/router';


// importacion del componente login

import { LoginComponent } from './pages/login/login'
import { RegisterComponent } from './pages/register/register'

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
    }
];
