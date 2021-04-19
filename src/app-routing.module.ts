import { ApiProductsComponent } from './components/api-products/api-products.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiProductDetailsComponent } from './components/api-product-details/api-product-details.component';
import { PagenotfoundComponent } from './components/site-layout/pagenotfound/pagenotfound.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';

const routes: Routes = [
  {path:'subcategory',component:SubCategoriesComponent},
  {path:'ApiProducts',component:ApiProductsComponent},
 {path:'ApiProduct/:id',component:ApiProductDetailsComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
