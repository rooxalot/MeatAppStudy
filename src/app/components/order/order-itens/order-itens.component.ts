import { CartItem } from './../../../models/cartItem.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {

  @Input() orderItens: CartItem[];
  @Output() emitIncrement: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() emitDecrement: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() emitRemove: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  increment(cartItem: CartItem) {
    this.emitIncrement.emit(cartItem);
  }
  decrement(cartItem: CartItem) {
    this.emitDecrement.emit(cartItem);
  }
  remove(cartItem: CartItem) {
    this.emitRemove.emit(cartItem);
  }

}
