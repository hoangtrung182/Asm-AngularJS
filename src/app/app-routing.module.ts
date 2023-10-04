import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/Admin/products/products.component';
import { ProductEditComponent } from './pages/Admin/product-edit/product-edit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: "", component: BaseLayoutComponent, children: [
    { path: 'products', component: HomePageComponent},
    { path: 'products/:id', component: DetailPageComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: '', redirectTo: 'products', pathMatch: 'full'},
      ]
  },
  { path: "admin", component: AdminLayoutComponent, children: [
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: 'products', component: ProductsComponent },
    { path: 'products/add', component: AddProductComponent},
    { path: 'products/edit/:id', component: ProductEditComponent},
  ]},
  { path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
