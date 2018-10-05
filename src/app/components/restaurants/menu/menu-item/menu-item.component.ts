import { MenuItem } from './../../../../models/menuItem.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
