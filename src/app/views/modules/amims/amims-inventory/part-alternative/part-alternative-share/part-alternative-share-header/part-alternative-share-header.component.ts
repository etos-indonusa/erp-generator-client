import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-alternative-share-header',
    templateUrl: './part-alternative-share-header.component.html',
    styleUrl: './part-alternative-share-header.component.scss'
})
export class PartAlternativeShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
