import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-position-share-header',
    templateUrl: './position-share-header.component.html',
    styleUrl: './position-share-header.component.scss'
})
export class PositionShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
