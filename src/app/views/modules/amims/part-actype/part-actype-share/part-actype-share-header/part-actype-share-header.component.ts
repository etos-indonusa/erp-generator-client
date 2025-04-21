import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-actype-share-header',
    templateUrl: './part-actype-share-header.component.html',
    styleUrl: './part-actype-share-header.component.scss'
})
export class PartActypeShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
