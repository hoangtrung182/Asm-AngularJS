import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../components/Services/products.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {

  productForm = this.form.group({
    name: [''],
    code: [''],
    imageUrl: [''],
    price: ['']
  })
  constructor(public productService: ProductsService, private router: Router, private form: FormBuilder) {}
 
  async onSubmit() {
    try {
      await lastValueFrom(this.productService.addProduct(this.productForm.value as IProduct));
      this.router.navigate(['/admin/products']);
      alert("Added successfully");
    } catch (error: any) {
      console.log(error.message)
    }
  }
}
