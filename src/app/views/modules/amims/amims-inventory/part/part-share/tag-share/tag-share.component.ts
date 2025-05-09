import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-share',
  templateUrl: './tag-share.component.html',
  styleUrl: './tag-share.component.scss'
})
export class TagShareComponent {
    @Input('idPart') idPart: string // replace dengan id+Nama
    listOfData: any[] = [
        { status: 'Serviceable', date: '12 Dec 22', inspector: 'Purwanto', downloadLink: '#' },
        { status: 'Serviceable', date: '12 Dec 22', inspector: 'Purwanto', downloadLink: '#' },
        { status: 'Unserviceable', date: '12 Dec 22', inspector: 'Purwanto', downloadLink: '#' },
        { status: 'Serviceable', date: '12 Dec 22', inspector: 'Purwanto', downloadLink: '#' },
        { status: 'Serviceable', date: '12 Dec 22', inspector: 'Purwanto', downloadLink: '#' }
    ];
}
 

