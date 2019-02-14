import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpHeader: HttpHeaders;

  constructor(private http: HttpClient) {

    this.httpHeader = new HttpHeaders()
                      .set('Content-Type', 'application/json')
                      .set('Cache-Control', 'no-cache')
                      .set('Accept', 'text/plain')
                      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  get(actionUrl: string, params?: HttpParams): Observable<any> {
    return this.http.get(actionUrl , {
      headers: this.httpHeader,
      params: params
    });
    // .pipe(
    //   map((response: Response) => {
    //     return response;
    //   })
    // );
  }

  get1(actionUrl: string, params?: HttpParams): Observable<any> {
    return this.http.get(actionUrl , {
      headers: this.httpHeader,
      params: params
    }).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }

  post(actionUrl: string, bodyContent?: any): Observable<any> {
    return this.http.post(actionUrl, JSON.stringify(bodyContent), {
      headers: this.httpHeader
    });
  }
}
