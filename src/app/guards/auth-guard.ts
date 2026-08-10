import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router=inject(Router);
  
  // simulacion de autenticacion
  if (authService.estaAutenticado()){
    return true
  }
  router.navigate(['/login']);
  
  
  return false;
};
