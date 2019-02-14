import { Cart } from './../models/cart';
import { AuthService } from './../core/auth.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  username: string;
  cart$: Observable<Cart[]>;

  newCart$: any;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.username = this.authService.getUserName();
    this.cart$ = this.cartService.getCart(this.username);
  }
}
