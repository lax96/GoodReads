import { Router } from '@angular/router';
import { CartService } from './../services/cart.service';
import { AuthService } from './../core/auth.service';
import { LoginValidators } from './validators';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        LoginValidators.CannotContainSpace,
        LoginValidators.EmailFormat
      ]
    ],
    password: ['', Validators.required]
  });

  OnSubmit() {
    this.authService.authenticate(
      this.username.value,
      this.password.value
    ).subscribe(token => {
      if (token != null) {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      }
    }, error => {
      console.log('Error generating token.' + error.message);
      console.log(error);
    });

    this.cartService.getCartSize(this.username.value).subscribe(x => {
      this.cartService.cartSize.next(x);
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
