import { Component } from '@angular/core';
import { StoreappService } from '../storeapp.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(
    private readonly storeAppService: StoreappService,
  ) { }

  cart = this.storeAppService.cart
}
