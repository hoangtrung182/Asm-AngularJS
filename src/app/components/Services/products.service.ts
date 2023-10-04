import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'http://localhost:3000/products'

  //inheritance HTTP methods
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return  this.http.get<IProduct[]>(this.API_URL);
  }

  getAProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct) :Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL, product);
  }

  deleteProduct(id: number | string) : Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }

  updateProduct(product: IProduct) : Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
}
