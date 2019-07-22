import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toMB'
})
export class ToMBPipe implements PipeTransform {

  transform(size: number): any {
    const s = size.toString().length;
    return `${(size / (Math.pow(10, 6))).toPrecision(2)} MB`;
  }

}
