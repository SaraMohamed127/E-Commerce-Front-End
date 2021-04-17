import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ishops} from '../interfaces/ishops';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopservicesService {
  api_url:string = 'http://127.0.0.1:8000/';
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  get_all_products(){
   // return this.http.get<Ishops[]>(this.url);
    return this.http.get(this.api_url + `products/all_products/`)
  }
}


  // return this._http.get<ApiProduct[]>(`${environment.apiUrl}`);
// "proxyConfig": "src/proxy.conf.json"

