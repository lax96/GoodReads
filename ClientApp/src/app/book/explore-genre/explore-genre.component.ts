import { CartService } from './../../services/cart.service';
import { AuthService } from './../../core/auth.service';
import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'explore-genre',
  templateUrl: './explore-genre.component.html',
  styleUrls: ['./explore-genre.component.css']
})
export class ExploreGenreComponent implements OnInit {
  selectedGenreId: number;
  books$: Observable<Book[]>;
  addBook$: any;
  currentSize = 0;
  username: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.selectedGenreId = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  ngOnInit() {
    this.books$ = this.bookService.getBooks(this.selectedGenreId);

    this.username = this.authService.getUserName();

    this.cartService.getCartSize(this.username).subscribe(x => {
      this.currentSize = x;
    });
  }

  addBook(selectedBook: number) {
    const data = {
      Username: this.username,
      BookId: selectedBook,
      Quantity: 1
    };

    this.cartService.addToCart(data).subscribe((response: Response) => {
      // console.log('Book added to cart.');
    });

    this.cartService.cartSize.subscribe(x => {
      this.currentSize = x;
    });

    this.cartService.cartSize.next(this.currentSize + 1);
  }
}
