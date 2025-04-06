import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text_tr'
})
export class TextTrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
