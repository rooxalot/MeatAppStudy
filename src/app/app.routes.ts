import { OrderSummaryComponent } from './components/order/order-summary/order-summary.component';
import { ReviewsComponent } from './components/restaurants/reviews/reviews.component';
import { MenuComponent } from './components/restaurants/menu/menu.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurants/restaurant-details/restaurant-details.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurant-details/:id', component: RestaurantDetailsComponent,
      children: [
        { path: 'menu', component: MenuComponent },
        { path: 'reviews', component: ReviewsComponent },
        { path: '', redirectTo: 'menu', pathMatch: 'full' }
      ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'  }
];
