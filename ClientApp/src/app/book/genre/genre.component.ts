import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres$: Observable<Book[]>;
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.genres$ = this.bookService.getAllGenres()
                  .pipe(
                    catchError((error: Error) => {
                      console.log('error: ' + error.message);
                      return of(null);
                    })
                  );
  }
}
