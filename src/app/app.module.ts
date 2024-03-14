import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreItemComponent } from './store/store-item/store-item.component';

@NgModule({
  declarations: [AppComponent, StoreListComponent, StoreItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
