import { RestaurantService } from "./../../../services/restaurant.service";
import { Component, OnInit } from "@angular/core";
import { Review } from "../../../models/review.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    let id: string = this.route.parent.snapshot.params["id"];

    this.restaurantService
      .getRestaurantReviewsById(id)
      .subscribe(data => (this.reviews = data));
  }

  getRatingFace(rating: number): string {
    let ratingImage = '';

    if(rating < 3.5) {
      ratingImage = 'pissed';
    }
    else if (rating > 3.5 && rating <= 4){
      ratingImage = 'soso';
    }
    else {
      ratingImage = 'loved'
    }

    return `assets/img/reactions/${ratingImage}.png`;
  }
}
