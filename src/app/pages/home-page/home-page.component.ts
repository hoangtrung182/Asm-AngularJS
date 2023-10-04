import { Component } from '@angular/core';
import { ProductsService } from '../../components/Services/products.service';
import { IProduct } from 'src/app/interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  searchValue: string = '';


  products: IProduct[] = [];
    constructor(private productService: ProductsService) {
     
    }

    async ngOnInit() {
      try {
        this.products = await lastValueFrom(this.productService.getAll());
      } catch (error: any) {
        console.log(error.message);      
      }
    }

}
