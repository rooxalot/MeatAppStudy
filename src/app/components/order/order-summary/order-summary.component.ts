import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  experienceRating = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  setExperienceRating(rating: number) {
    this.experienceRating = rating;
  }


}
