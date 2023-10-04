import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/components/Services/products.service';
import { IProduct } from 'src/app/interface';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // @Input() products!: IProduct[];
  // @Output() onRemove = new EventEmitter();
  // @Output() onSend = new EventEmitter();
  current!: IProduct;
  currentProduct = this.form.group({
    name: [''],
    code: [''],
    imageUrl: [''],
    price: ['']
  });

  constructor(private router: ActivatedRoute, private productService: ProductsService, private router1: Router, private form: FormBuilder) {
  }

  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    try {
      this.current = await lastValueFrom(this.productService.getAProduct(id));
      this.currentProduct.patchValue(this.current);
    } catch (error: any) {
      console.log(error.message);
    }
  }

 async onSubmit() {
  const product = {id: this.current.id, ...this.currentProduct.value};
    try {
      await lastValueFrom(this.productService.updateProduct(product as IProduct));
      this.router1.navigate(['/admin/products/']);
      console.log('Update successfully')
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
