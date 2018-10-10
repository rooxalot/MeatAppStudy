
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ROUTES } from './app.routes';

import { HttpManager } from './core/httpManager';
import { MessageService } from './services/message.service';
import { RestaurantService } from './services/restaurant.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { PaymentService } from './services/payment.service';

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
import { OrderItensComponent } from './components/order/order-itens/order-itens.component';
import { OrderSummaryComponent } from './components/order/order-summary/order-summary.component';
import { StarRatingComponent } from './components/shared/star-rating/star-rating.component';


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
    RadioOptionComponent,
    OrderItensComponent,
    OrderSummaryComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpManager, MessageService, RestaurantService, ShoppingCartService, OrderService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
