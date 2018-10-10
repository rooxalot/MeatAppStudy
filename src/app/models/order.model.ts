import { CartItem } from './cartItem.model';
import { PaymentOption } from "./paymentOption.model";

export class Order {
  id: string;
  address: string;
  number: string;
  complement: string;
  paymentOption: PaymentOption;
  total: number;
  itens: CartItem[];

  getOrderTotal(): number {
    return this.total + this.paymentOption.freightValue;
  }
}
