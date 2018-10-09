import { CartItem } from './../../models/cartItem.model';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
  }

  getCartItens(): CartItem[] {
    return this.cartService.getItens();
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(): number {
    let total = this.cartService.getTotal();
    return total;
  }

  redirectToOrder(): void {
    this.router.navigate(['/order']);
  }
}
