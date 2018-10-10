import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() starCount: number;
  @Output() emitStarCount: EventEmitter<number> = new EventEmitter<number>();

  starCountArray: number[] = [];
  selectedStarCount: number;

  constructor() { }

  ngOnInit() {
    this.starCount = this.starCount || 5;

    for (let index = 1; index <= this.starCount; index++) {
      this.starCountArray.push(index);
    }
  }

  setStarCount(starLevel: number) {
    this.selectedStarCount = starLevel;
    this.emitStarCount.emit(starLevel);
  }

  isSelected(starIndex: number): boolean {
    return starIndex <= this.selectedStarCount;
  }

}
