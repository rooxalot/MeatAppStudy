import { MenuItem } from './../models/menuItem.model';
import { HttpManager } from './../core/httpManager';
import { environment } from './../../environments/environment';
import { Restaurant } from './../models/restaurant.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Review } from '../models/review.model';

@Injectable()
export class RestaurantService {

  constructor(private httpManager: HttpManager) { }

  getRestaurants(): Observable<Restaurant[]> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/restaurants`;

    let restaurantsObservable = this.httpManager.get(url) as Observable<Restaurant[]>;
    return restaurantsObservable;
  }

  getRestaurantById(restaurantId: string): Observable<Restaurant> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/restaurants/${restaurantId}`;

    let restaurantObservable = this.httpManager.get(url) as Observable<Restaurant>;
    return restaurantObservable;
  }

  getRestaurantMenuById(restaurantId: string): Observable<MenuItem[]> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/restaurants/${restaurantId}/menu`;

    let menuObservable = this.httpManager.get(url) as Observable<MenuItem[]>;
    return menuObservable;
  }

  getRestaurantReviewsById(restaurantId: string): Observable<Review[]> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}/reviews?restaurantId=${restaurantId}`;

    let reviewsObservable = this.httpManager.get(url) as Observable<Review[]>;
    return reviewsObservable;
  }
}
