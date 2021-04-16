import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Ishops} from '../interfaces/ishops';
import {Observable} from 'rxjs';
import {ShopservicesService} from '../services/shopservices.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  shops: Ishops[];
  // tslint:disable-next-line:variable-name
  constructor(private myservice: ShopservicesService) { }

  ngOnInit(): void {
    this.myservice.get_all_products().subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      this.shops = data;
    }, error => {
      console.log(error);
    });
  }

}
