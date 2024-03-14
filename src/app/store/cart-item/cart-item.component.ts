import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/item';
import { StoreappService } from '../storeapp.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: CartItem | null = null;

  constructor(private readonly storeAppService: StoreappService) { }

  decreaseAmount(item: CartItem) {
    if (item.amount > 0) {
      item.amount--;
      if (item.amount === 0) {
        this.storeAppService.removeFromCart(item);
      } else {
        this.storeAppService.updateCartItem(item);
      }
    }
  }

  increaseAmount(item: CartItem) {
    item.amount++;
    this.storeAppService.updateCartItem(item);
  }
}
