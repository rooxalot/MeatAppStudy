import { PaymentService } from './../../services/payment.service';
import { RadioOption } from './../../models/radioOption.model';
import { CartItem } from './../../models/cartItem.model';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[];

  constructor(private cartService: ShoppingCartService, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPaymentOptions()
      .subscribe(data => {
        let radioOptions = data.map(payment => new RadioOption(payment.paymentName, payment));
        this.paymentOptions = radioOptions;
      });
  }

  getItens(): CartItem[] {
    return this.cartService.getItens();
  }

  incrementQuantity(item: CartItem): void {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.decrementQuantity(item);
  }

  removeItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

}
