import { Restaurant } from "./../../../models/restaurant.model";
import { RestaurantService } from "./../../../services/restaurant.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-restaurant-details",
  templateUrl: "./restaurant-details.component.html",
  styleUrls: ["./restaurant-details.component.css"]
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    let id: string = this.route.snapshot.params["id"];
    this.restaurantService
      .getRestaurantById(id)
      .subscribe(data => (this.restaurant = data));
  }
}
