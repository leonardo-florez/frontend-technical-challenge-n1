import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer.interface';
import { GeneralResponse } from '../../../shared/interfaces/general-response.interface';
import { Login } from '../interfaces/login.interface';
import { environment } from '../../../../environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  private _customer = signal<Customer | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  customer = computed(() => this._customer());
  token = computed(() => this._token());

  login(email: string, password: string) {
    return this.http.post<GeneralResponse<Login>>(`${environment.backendUrl}/auth/login`, { email, password })
      .pipe(
        tap(res => {
          if (res.data && res.data.token) {
            this._token.set(res.data.token);
            localStorage.setItem('token', res.data.token);
            this._customer.set(res.data.customer);
          }
        })
      );
  }

  logout(){
    this._token.set(null);
    this._customer.set(null);
    localStorage.removeItem('token');
  }
}
