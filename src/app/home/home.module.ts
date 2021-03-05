import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [HomeComponent, ProductComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
