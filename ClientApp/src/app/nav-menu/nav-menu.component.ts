import { AuthService } from './../core/auth.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  username: string;
  cartSize = 0;

  constructor(private authService: AuthService
    , private cartService: CartService) {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.cartService.cartSize.subscribe(x => {
      this.cartSize = x;
    });
  }
}
