import { environment } from './../../environments/environment.prod';
import { PaymentOption } from './../models/paymentOption.model';
import { Observable } from 'rxjs/Observable';
import { HttpManager } from './../core/httpManager';
import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  constructor(private httpManager: HttpManager) { }

  getPaymentOptions(): Observable<PaymentOption[]> {
    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/paymentOptions`;

    let paymentOptionsObservable = this.httpManager.get(url) as Observable<PaymentOption[]>;
    return paymentOptionsObservable;
  }

}
