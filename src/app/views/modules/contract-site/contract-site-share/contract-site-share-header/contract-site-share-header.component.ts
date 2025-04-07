import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contract-site-share-header',
    templateUrl: './contract-site-share-header.component.html',
    styleUrl: './contract-site-share-header.component.scss'
})
export class ContractSiteShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
