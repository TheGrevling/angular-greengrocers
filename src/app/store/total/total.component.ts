import { Component } from '@angular/core';
import { StoreappService } from '../storeapp.service';
import { CartItem } from 'src/app/models/item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly storeAppService: StoreappService) { }
  total: number = 0;

  ngOnInit(): void {
    this.storeAppService.total$.subscribe((newTotal) => {
      this.total = newTotal;
    });
  }
}
