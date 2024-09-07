import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  processPayment(amount: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>('/api/payment', { amount })
      .pipe(
        map(response => response)
      );
  }
}
