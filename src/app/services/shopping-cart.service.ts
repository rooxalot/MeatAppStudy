import { MenuItem } from "./../models/menuItem.model";
import { CartItem } from "./../models/cartItem.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {
  private cartItens: CartItem[] = [];

  constructor() {}

  getItens(): CartItem[] {
    return this.cartItens;
  }

  addItem(item: MenuItem): void {
    let cartItem = new CartItem(item);
    let itemExists: boolean = this.cartItens.some(
      ci => ci.item.id === cartItem.item.id
    );

    if (!itemExists) {
      this.cartItens.push(cartItem);
    } else {
      this.incrementQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    let foundItemIndex = this.cartItens.findIndex(
      ci => ci.item.id === cartItem.item.id
    );

    if (foundItemIndex !== -1) {
      this.cartItens.splice(foundItemIndex, 1);
    }
  }

  incrementQuantity(cartItem: CartItem): void {
    let foundItem = this.cartItens.find(ci => ci.item.id === cartItem.item.id);

    if (foundItem) {
      foundItem.quantity++;
    }
  }

  decrementQuantity(cartItem: CartItem): void {
    let foundItem = this.cartItens.find(ci => ci.item.id === cartItem.item.id);

    if (foundItem) {
      foundItem.quantity--;
    }

    if (foundItem.quantity <= 0) {
      this.removeItem(foundItem);
    }
  }

  clearCart(): void {
    this.cartItens = [];
  }

  getTotal(): number {
    let total = this.cartItens
      .map(item => item.getPrice())
      .reduce((prev, curr) => prev + curr, 0);

    return total;
  }
}
