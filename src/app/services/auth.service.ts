import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ success: boolean }>('/api/login', { email, password })
      .pipe(
        map(response => response.success),
        catchError(() => of(false))
      );
  }

  signup(email: string, password: string): Observable<boolean> {
    return this.http.post<{ success: boolean }>('/api/signup', { email, password })
      .pipe(
        map(response => response.success),
        catchError(() => of(false))
      );
  }
}
