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
  
  filter: string = "all";
  store = this.storeAppService.store

  addItem(item: Item){
    this.storeAppService.addToCart(item)
  }

  filterItems() {
    if (this.filter === 'all') {
      // If filter is 'all', show all items
      this.store = this.storeAppService.store;
    } else {
      // Filter items based on the selected filter
      this.store = this.storeAppService.store.filter((item:any) => item.type === this.filter);
    }
  }
}
