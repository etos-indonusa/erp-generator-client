import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contract-share-header',
    templateUrl: './contract-share-header.component.html',
    styleUrl: './contract-share-header.component.scss'
})
export class ContractShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
