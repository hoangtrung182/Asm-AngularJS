import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductEditComponent } from './pages/Admin/product-edit/product-edit.component';
import { ProductsComponent } from './pages/Admin/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeNumberToTextPipe,
    SearchBoxPipe,
    ProductEditComponent,
    ProductsComponent,
    HomePageComponent,
    DetailPageComponent,
    NotFoundComponent,
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
