import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-category-share-header',
    templateUrl: './part-category-share-header.component.html',
    styleUrl: './part-category-share-header.component.scss'
})
export class PartCategoryShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
