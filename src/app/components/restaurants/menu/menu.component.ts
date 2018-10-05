import { RestaurantService } from "./../../../services/restaurant.service";
import { MenuItem } from "./../../../models/menuItem.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  restaurantMenu: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    let id: string = this.route.parent.snapshot.params['id'];

    this.restaurantService
      .getRestaurantMenuById(id)
      .subscribe(data => (this.restaurantMenu = data));
  }
}
