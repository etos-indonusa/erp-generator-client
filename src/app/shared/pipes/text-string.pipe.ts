import { Pipe, PipeTransform } from '@angular/core';  
import { text_string } from './text_string';

 
@Pipe({
    name: 'textString'
})
export class TextStringPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        let cek =  text_string.find(m => m.key == value)
        if (cek) {
            return cek.text
        }
        return value;
    }

}
