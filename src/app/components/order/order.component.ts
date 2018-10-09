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

  paymentOptions: RadioOption[] = [
    new RadioOption('Dinheiro', 'DIN'),
    new RadioOption('Cartão de Débito', 'DEB'),
    new RadioOption('Cartão de Crédito', 'CRD'),
    new RadioOption('Vale Refeição', 'REF'),
  ];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
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
