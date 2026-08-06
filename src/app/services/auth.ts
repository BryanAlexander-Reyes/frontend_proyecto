import { UsuarioAuth } from '../models/usuario-auth';
import { Inject, Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'   
})

export class AuthService {
    private readonly STORAGE_KEY='usuarioSesion';

    constructor(){} 


}
