import { fromReadableStreamLike } from 'rxjs/internal/observable/innerFrom';
import { UsuarioAuth } from '../models/usuario-auth';
import { Inject, Injectable } from '@angular/core';

interface UsuarioSistemas extends UsuarioAuth {
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'usuarioSesion';

  private usuarioSistemas: UsuarioSistemas[] = [
    {
      nombre: 'Administrador',
      correo: 'admin@sena.edu.co',
      password: '123456',
      rol: 'Administrador',
    },
    {
      nombre: 'Fabian Instructor',
      correo: 'instructor@sena.edu.co',
      password: '123456',
      rol: 'Instructor',
    },
    {
      nombre: 'Pasta Aprendiz',
      correo: 'pasta@sena.edu.co',
      password: '123456',
      rol: 'Aprendiz',
    },
  ];

  constructor() {}

  // Metodo para guardar la informacion del usuario

  iniciarSesion(correo:string, password:string):boolean {
    const usuario = this.usuarioSistemas.find((u) => u.correo === correo);
        if (!usuario) {
        return false;
        }
        if (usuario.password !== password) {
        return false;
        }
        const usuarioAuth={
            nombre:usuario.nombre,
            correo:usuario.correo,
            rol:usuario.rol
        }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuarioAuth));
    localStorage.setItem('usuarioLogeado', 'true')
    return true;
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // METODO PARA SABER SI ES UN USUARIO AUTENTICADO
  estaAutenticado(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) != null;
  }

  // metodo que obtiene el usuario autenticas
  obtenerUsuario(): UsuarioAuth | null {
    const usuario = localStorage.getItem(this.STORAGE_KEY);
    if (!usuario) {
      return null;
    }
    return JSON.parse(usuario);
  }

  // Metodo para obtener el rol

  obtnerRol(): string {
    return this.obtenerUsuario()?.rol ?? '';
  }

  // metodo para obtener nombre
  obtenerNombre(): string {
    return this.obtenerUsuario()?.nombre ?? '';
  }
}
