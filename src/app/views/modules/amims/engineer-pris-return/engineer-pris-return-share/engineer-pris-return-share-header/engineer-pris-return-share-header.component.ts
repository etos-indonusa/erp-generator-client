import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pris-return-share-header',
    templateUrl: './engineer-pris-return-share-header.component.html',
    styleUrl: './engineer-pris-return-share-header.component.scss'
})
export class EngineerPrisReturnShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
