import { CartService } from './../services/cart.service';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService
              , private cartService: CartService
              , private router: Router) { }

  ngOnInit() {
    this.cartService.cartSize.complete();
    this.authService.logoutSession();
    this.router.navigate(['/']);
  }
}
