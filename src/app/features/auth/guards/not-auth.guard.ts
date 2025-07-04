import { inject } from '@angular/core';
import { Router, type CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const NotAuthGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.token() !== null;

  if (!isAuthenticated) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
