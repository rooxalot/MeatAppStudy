import { MenuItem } from "./menuItem.model";

export class CartItem {
  constructor(public item: MenuItem, public quantity: number = 1) {}

  getPrice(): number {
    let itemPrice = this.quantity * this.item.price;
    return itemPrice;
  }

}
