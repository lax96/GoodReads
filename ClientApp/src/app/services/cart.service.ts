import { HttpService } from './../core/http.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private BASE_URL = 'http://localhost:5000/';

  cartSize = new BehaviorSubject(0);

  constructor(private httpService: HttpService) { }

  addToCart(data: any): any {
    return this.httpService.post(this.BASE_URL + 'api/cart/addToCart', data);
  }

  getCartSize(Username: string): Observable<number> {
    const params = new HttpParams().set('username', Username);

    return this.httpService.get(this.BASE_URL + 'api/cart/getCartSize', params);
  }

  getCart(Username: string): Observable<Cart[]> {
    const params = new HttpParams().set('username', Username);

    return this.httpService.get(this.BASE_URL + 'api/cart/getCart', params);
  }
}
