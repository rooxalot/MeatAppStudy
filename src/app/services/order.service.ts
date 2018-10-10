import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpManager } from './../core/httpManager';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../models/cartItem.model';
import { Order } from './../models/order.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private httpManager: HttpManager, private cartService: ShoppingCartService) { }

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

  getTotal(): number {
    return this.cartService.getTotal();
  }

  checkoutOrder(order: Order): Observable<Order> {
    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/orders`;

    let orderObservable = this.httpManager.post(url, order);
    return orderObservable;
  }

}
