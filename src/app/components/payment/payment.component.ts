import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount: number = 0;

  constructor(private paymentService: PaymentService) { }

  makePayment() {
    this.paymentService.processPayment(this.amount).subscribe(response => {
      if (response.success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed. Please try again.');
      }
    });
  }
}
