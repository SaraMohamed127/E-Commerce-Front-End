import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/site-layout/header/nav.component';
import { FooterComponent } from './components/site-layout/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/site-layout/content/content.component';
import { MainComponent } from './components/main/main.component';
import { ShopservicesService } from './components/services/shopservices.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    MainComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ShopservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
