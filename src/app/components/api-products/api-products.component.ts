
import { ApiProductService } from './../../services/api-product.service';
import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.css']
})
export class ApiProductsComponent implements OnInit {
ApiProducts:ApiIproduct[];
  constructor(private _apiPrdServ:ApiProductService) { }

  ngOnInit(): void {
   this._apiPrdServ.getAllProducts().subscribe((res)=>{
    //  console.log(res);
    this.ApiProducts=res;
   },(err)=>{
     console.log(err);

   })
  }

}
