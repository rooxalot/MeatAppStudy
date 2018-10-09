import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { HttpManager } from './core/httpManager';
import { RestaurantService } from './services/restaurant.service';
import { ShoppingCartService } from './services/shopping-cart.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantItemComponent } from './components/restaurants/restaurant-item/restaurant-item.component';
import { RestaurantDetailsComponent } from './components/restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './components/restaurants/menu/menu.component';
import { MenuItemComponent } from './components/restaurants/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurants/reviews/reviews.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { InputContainerComponent } from './components/shared/input-container/input-container.component';
import { RadioOptionComponent } from './components/shared/radio-option/radio-option.component';


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
    ReviewsComponent,
    ShoppingCartComponent,
    OrderComponent,
    InputContainerComponent,
    RadioOptionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpManager, RestaurantService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
