import { HttpService } from './../core/http.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private BASE_URL = 'http://localhost:5000/';

  params = new HttpParams();

  constructor(private httpService: HttpService) {
  }

  getAllGenres(): Observable<Book[]> {
    return this.httpService.get(this.BASE_URL + 'api/book/GetGenres')
          .pipe(
            retry(2),
            catchError(err => {
              console.log(err);
              return of(null);
            })
          );
  }

  getBooks(Id: number): Observable<Book[]> {

    this.params = this.params.set('genre', Id.toString());

    return this.httpService.get(this.BASE_URL + 'api/book/GetBooks', this.params);
  }
}
