import { MenuItem } from "./../models/menuItem.model";
import { CartItem } from "./../models/cartItem.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {
  private cartItensStorageKey: string = 'cartItens';
  private cartItens: CartItem[] = [];

  constructor() { }

  getItens(): CartItem[] {
    let cartItensJson = localStorage.getItem(this.cartItensStorageKey);
    let storageCartItens = JSON.parse(cartItensJson) as CartItem[];
    if (storageCartItens) {
      this.cartItens = storageCartItens.map(
        cartItem => new CartItem(cartItem.item, cartItem.quantity)
      );
    } else {
      this.cartItens = [];
    }

    return this.cartItens;
  }

  addItem(item: MenuItem): void {
    let storageCartItens = this.getItens();
    let cartItem = new CartItem(item);
    let itemExists: boolean = storageCartItens.some(
      ci => ci.item.id === cartItem.item.id
    );

    if (!itemExists) {
      this.cartItens.push(cartItem);
    } else {
      this.incrementQuantity(cartItem);
    }

    this.saveItens();
  }

  removeItem(cartItem: CartItem): void {
    let storageCartItens = this.getItens();
    let foundItemIndex = storageCartItens.findIndex(
      ci => ci.item.id === cartItem.item.id
    );

    if (foundItemIndex !== -1) {
      storageCartItens.splice(foundItemIndex, 1);
      this.saveItens();
    }
  }

  incrementQuantity(cartItem: CartItem): void {
    let storageCartItens = this.getItens();
    let foundItem = storageCartItens.find(ci => ci.item.id === cartItem.item.id);

    if (foundItem) {
      foundItem.quantity++;
      this.saveItens();
    }
  }

  decrementQuantity(cartItem: CartItem): void {
    let storageCartItens = this.getItens();
    let foundItem = storageCartItens.find(ci => ci.item.id === cartItem.item.id);

    if (foundItem) {
      foundItem.quantity--;
      this.saveItens();
    }

    if (foundItem.quantity <= 0) {
      this.removeItem(foundItem);
    }
  }

  clearCart(): void {
    this.cartItens = [];
    localStorage.removeItem(this.cartItensStorageKey);
  }

  getTotal(): number {
    let storageCartItens = this.getItens();
    let total = storageCartItens
      .map(item => item.getPrice())
      .reduce((prev, curr) => prev + curr, 0);

    return total;
  }


  private saveItens(): void {
    let cartItensJson = JSON.stringify(this.cartItens);
    localStorage.setItem(this.cartItensStorageKey, cartItensJson);
  }
}
