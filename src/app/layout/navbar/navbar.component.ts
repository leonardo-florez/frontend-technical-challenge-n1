import { Component, inject } from '@angular/core';
import { AuthService } from '../../features/auth/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  customer = this.authService.customer;

  get customerName(): string {
    const customerData = this.customer();
    return customerData?.name || customerData?.email || 'User';
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
