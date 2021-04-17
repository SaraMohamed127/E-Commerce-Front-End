import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ShopservicesService } from '../../services/shopservices.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  shops: any;
  // tslint:disable-next-line:variable-name
  constructor(private myservice: ShopservicesService) { }

  ngOnInit(): void {
    this.AllShops();
  }

  AllShops() {
    this.myservice.get_all_products().subscribe(shops => {
      this.shops = shops;
      console.log(this.shops);
        })
  }

}
