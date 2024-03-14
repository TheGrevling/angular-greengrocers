import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;
  @Output('addToCart') addToCart = new EventEmitter<Item>();

  addItem(){
    if (!this.item) {
      throw new Error('cannot toggle complete on null');
    }
    this.addToCart.emit(this.item); // Emit the current item
  }
}
