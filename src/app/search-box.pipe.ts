import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interface';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: any, text: string){
    const filterArray = data.filter((item: IProduct) => item.name.toLowerCase().indexOf(text.toLowerCase()) != -1);
    return filterArray;
  }

}
