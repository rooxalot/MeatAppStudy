import { Order } from "./../../models/order.model";
import { PaymentOption } from "./../../models/paymentOption.model";
import { OrderService } from "./../../services/order.service";
import { PaymentService } from "./../../services/payment.service";
import { RadioOption } from "./../../models/radioOption.model";
import { CartItem } from "./../../models/cartItem.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[];

  constructor(
    private router: Router,
    private cartService: ShoppingCartService,
    private orderService: OrderService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.paymentService.getPaymentOptions().subscribe(data => {
      let radioOptions = data.map(
        payment => new RadioOption(payment.paymentName, payment)
      );
      this.paymentOptions = radioOptions;
    });
  }

  getItens(): CartItem[] {
    return this.orderService.getItens();
  }

  incrementQuantity(item: CartItem): void {
    this.orderService.incrementQuantity(item);
  }

  decrementQuantity(item: CartItem): void {
    this.orderService.decrementQuantity(item);
  }

  removeItem(cartItem: CartItem): void {
    this.orderService.removeItem(cartItem);
  }

  getCartTotal(): number {
    return this.orderService.getTotal();
  }

  getFreightValue(order: Order): number {
    if (order.paymentOption) {
      return order.paymentOption.freightValue || 0;
    }

    return 0;
  }

  checkoutOrder(order: Order) {
    let totalItens: number = this.orderService.getTotal();
    let totalFreight: number = this.getFreightValue(order);

    order.total = totalItens + totalFreight;
    order.itens = this.orderService.getItens();

    this.orderService.checkoutOrder(order).subscribe(data => {
      if (data.id) {
        this.cartService.clearCart();
        this.router.navigate(['/']);
      }
    });
  }
}
