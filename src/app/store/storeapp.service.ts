import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartItem, Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class StoreappService {
  store : any;
  cart: CartItem[] = [];
  http = inject(HttpClient)

  constructor() { this.store = this.getStore() }

  async getStore() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}`));
    // @ts-ignore
    this.store = result;
    console.log(result)
    return this.store;
  }

  addToCart(item: Item) {
    // Check if the item already exists in the cart
    const existingCartItemIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingCartItemIndex !== -1) {
      // If the item exists in the cart, increase its amount by 1
      this.cart[existingCartItemIndex].amount++;
    } else {
      // If the item doesn't exist in the cart, add it as a new CartItem with amount 1
      const cartItem: CartItem = {
        ...item,
        amount: 1
      };
      this.cart.push(cartItem);
    }
    console.log(this.cart)
  }
}
