import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from './../../services/api-product.service';
import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';

@Component({
  selector: 'app-api-product-details',
  templateUrl: './api-product-details.component.html',
  styleUrls: ['./api-product-details.component.css']
})
export class ApiProductDetailsComponent implements OnInit {
  prd:ApiIproduct;
  constructor(private _apiPrdServ:ApiProductService,private _activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   let id=this._activedRoute.snapshot.params["id"];
    this._apiPrdServ.getProductByID(id).subscribe((res)=>{
       this.prd=res;
       console.log(this.prd);
    })
  }

}
