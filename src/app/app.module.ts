import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { HttpManager } from './core/httpManager';
import { RestaurantService } from './services/restaurant.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantItemComponent } from './components/restaurants/restaurant-item/restaurant-item.component';
import { RestaurantDetailsComponent } from './components/restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './components/restaurants/menu/menu.component';
import { MenuItemComponent } from './components/restaurants/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurants/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpManager, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
