
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
  get() {
    return localStorage.getItem('access_token');
  }
  set(token: string) {
    localStorage.setItem('access_token', token);
  }
  setRefresh(refresh: string) {
    localStorage.setItem('refresh_token', refresh);
  }
  getRefresh() {
    return localStorage.getItem('refresh_token');
  }
  clear() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
