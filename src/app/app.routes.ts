import { Routes } from '@angular/router';


// importacion del componente login

import { LoginComponent } from './pages/login/login'

// Definición de rutras de la aplicación 


export const routes: Routes = [
    // ruta principal de la app
    {
        path:'',
        component: LoginComponent,
    }
];
