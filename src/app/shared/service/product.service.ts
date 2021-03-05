import { map } from 'rxjs/operators';
import { Product, Category } from '../../shared/service/Models/product';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: any;

  constructor(private http: HttpClient, private router : Router) { }

  // public getProduct() : Observable<Product[]> {
  //   return this.http.get<Product[]>(`${environment.baseUrl}/product`).pipe(map(this.getProductData))
  // }
  private getProductData(response: { product: any; }) {
    return response.product
  }
  private categoryData(response: { data: any; }){
    return response.data
  }
  getDetailProduct(_id: any) : Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/product/${_id}`).pipe(map(res => {
      return res
    }))
  }
  // public getCategory() : Observable<Category[]> {
  //   return this.http.get<Product[]>(`${environment.baseUrlProduct}/category`).pipe(map(this.categoryData))
  // }
  // public getProductCategory(_id: any) : Observable<Product[]>{
  //   return this.http.get<Product[]>(`${environment.baseUrlProduct}/product/category/${_id}`).pipe(map(this.getProductData))
  // }
}
