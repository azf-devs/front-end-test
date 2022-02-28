import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'okKo'
})
export class OKKOPipe implements PipeTransform {
  transform(value: any): any {
    return value ? 'OK' : 'KO';;
  }
}