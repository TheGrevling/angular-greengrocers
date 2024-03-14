import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
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
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  public total$: Observable<number> = this.totalSubject.asObservable();

  calculateTotalSum() {
    let sum = 0;
    for (const item of this.cart) {
      sum += item.price * item.amount; // Multiply price by amount for each item
    }
    this.totalSubject.next(sum);
  }

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
    this.calculateTotalSum()
  }
  removeFromCart(item: CartItem) {
    const itemIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
    }
    this.calculateTotalSum()
  }

  updateCartItem(item: CartItem) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.amount = item.amount;
    }
    this.calculateTotalSum()
  }
}
