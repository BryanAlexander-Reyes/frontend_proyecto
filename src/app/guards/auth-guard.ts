import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);

  // simulacion de autenticacion
  const autenticado= localStorage.getItem('usuarioLogeado');
  if (autenticado==='true'){
    return true
  }
  router.navigate(['/login']);
  
  
  return true;
};
