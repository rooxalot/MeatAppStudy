import { environment } from './../../environments/environment';
import { Restaurant } from './../models/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  getRestaurants(): Observable<Restaurant[]> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}restaurants`;

    let restaurantsObservable = this.http.get(url).map(r => r.json());
    return restaurantsObservable;
  }

  getRestaurantById(restaurantId: string): Observable<Restaurant> {

    let baseUrl = environment.meatAPI;
    let url = `${baseUrl}restaurants/${restaurantId}`;

    let restaurantObservable = this.http.get(url).map(r => r.json());
    return restaurantObservable;
  }

}
