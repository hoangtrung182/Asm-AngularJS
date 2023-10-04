import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/components/Services/products.service';

import { IProduct } from 'src/app/interface';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {
  number: number = 0;
  currentProduct!: IProduct;

  constructor(private router: ActivatedRoute, private productService: ProductsService) {
   
  }

  async ngOnInit() {
    try {
      const { id } = this.router.snapshot.params;
      this.currentProduct = await lastValueFrom(this.productService.getAProduct(id));
    } catch (error) {
      console.log(error);
    }
  }
}
