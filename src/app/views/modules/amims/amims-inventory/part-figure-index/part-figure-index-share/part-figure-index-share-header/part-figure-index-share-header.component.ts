import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-figure-index-share-header',
    templateUrl: './part-figure-index-share-header.component.html',
    styleUrl: './part-figure-index-share-header.component.scss'
})
export class PartFigureIndexShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
