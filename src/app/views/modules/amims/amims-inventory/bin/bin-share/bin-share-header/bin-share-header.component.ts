import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-bin-share-header',
    templateUrl: './bin-share-header.component.html',
    styleUrl: './bin-share-header.component.scss'
})
export class BinShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
