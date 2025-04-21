import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pris-return-item-share-header',
    templateUrl: './engineer-pris-return-item-share-header.component.html',
    styleUrl: './engineer-pris-return-item-share-header.component.scss'
})
export class EngineerPrisReturnItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
