import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(loginRequest: LoginRequest) {
    // TODO: replace with real API call: this.http.post<LoginResponse>('/api/login', loginRequest)
    const mockToken = 'mock-token';
    return of({ token: mockToken }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.isLoggedIn.set(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
  }
}
