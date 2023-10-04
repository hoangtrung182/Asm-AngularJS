import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface';
import { ProductsService } from 'src/app/components/Services/products.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = ""
  
  listenChange(event: Event) {
    this.title = (event.target as HTMLInputElement) .value
  }

  searchText: string = "";
  products: IProduct[] = [];
  // productService: any;

  //Not inject
  // constructor() {
  //   this.productService = new ProductsService;
  //   this.products = this.productService.getAll();
  // }

  constructor(private productService: ProductsService, private router: Router) {
    // this.products = this.productService.getAll();
    // this.productService.getAll().subscribe({
    //   next: (data) => {this.products = data},
    //   error: (error) => {console.log(error.message)},
    //   complete: () => {console.log('Fetch done !')}
    // })
  }

  async ngOnInit() {
    try {
      this.products = await lastValueFrom(this.productService.getAll());
    } catch (error: any) {
      console.log(error.message);      
    }
  }

  async removeProduct(id: number | string) {
    const confirm = window.confirm('Are you sure you want to');
    if(confirm)
      try {
        await lastValueFrom(this.productService.deleteProduct(id));
        this.products = this.products.filter((item: IProduct) => item.id !== id);
        alert('Deleted successfully')
        this.router.navigate(['/admin/products']);
      } catch (error: any) {
        console.log(error.message); 
      }
  };
}
