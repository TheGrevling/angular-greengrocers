import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreItemComponent } from './store/store-item/store-item.component';
import { CartListComponent } from './store/cart-list/cart-list.component';
import { CartItemComponent } from './store/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { TotalComponent } from './store/total/total.component';

@NgModule({
  declarations: [AppComponent, StoreListComponent, StoreItemComponent, CartListComponent, CartItemComponent, TotalComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
