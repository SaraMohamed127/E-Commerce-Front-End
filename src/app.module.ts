import { FooterComponent } from './components/site-layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductsComponent } from './components/api-products/api-products.component';
import { ApiProductDetailsComponent } from './components/api-product-details/api-product-details.component';
import { PagenotfoundComponent } from './components/site-layout/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/site-layout/header/header.component';
import { ContentComponent } from './components/site-layout/content/content.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { SubCategoryService } from './services/sub-category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    ApiProductsComponent,
    ApiProductDetailsComponent,
    ContentComponent,
    SubCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
