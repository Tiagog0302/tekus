import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PrecioService {
  url1 = 'https://api.coinbase.com/v2/prices/spot?currency=COP';
  url2 = 'https://api.coinbase.com/v2/prices/spot?currency=USD';
  url3 = 'https://api.coinbase.com/v2/prices/spot?currency=EUR';

  constructor(private http: HttpClient) { }

  getPrecioCol(): Observable<any>{
    const URL1= this.url1;
    return this.http.get(URL1)
  }

  getPrecioUsd(): Observable<any>{
    const URL2= this.url2;
    return this.http.get(URL2)
  }

  getPrecioEur(): Observable<any>{
    const URL3= this.url3;
    return this.http.get(URL3)
  }
}
