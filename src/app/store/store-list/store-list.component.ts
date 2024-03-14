import { Component } from '@angular/core';
import { StoreappService } from '../storeapp.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  constructor(
    private readonly storeAppService: StoreappService,
  ) { }

  store = this.storeAppService.store

  addItem(item: Item){
    this.storeAppService.addToCart(item)
  }
}
