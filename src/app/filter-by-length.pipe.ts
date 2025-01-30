import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLength'
})
export class FilterByLengthPipe implements PipeTransform {
  
  transform(values: string[], minLength: number): string[] {
    return values.filter(value => value.length >= minLength);
  }


}
