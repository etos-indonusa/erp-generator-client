import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pris-item-share-header',
    templateUrl: './engineer-pris-item-share-header.component.html',
    styleUrl: './engineer-pris-item-share-header.component.scss'
})
export class EngineerPrisItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
