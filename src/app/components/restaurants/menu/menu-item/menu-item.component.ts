import { MenuItem } from './../../../../models/menuItem.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() emitAddItem = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit() {
  }

  addItem(menuItem: MenuItem): void {
    this.emitAddItem.emit(menuItem);
  }

}
