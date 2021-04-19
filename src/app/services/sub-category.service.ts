import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor( private httpclient: HttpClient) { }

getCategory(): Observable<any>
{
  return this.httpclient.get("http://127.0.0.1:8000/shops/category");
}

}
