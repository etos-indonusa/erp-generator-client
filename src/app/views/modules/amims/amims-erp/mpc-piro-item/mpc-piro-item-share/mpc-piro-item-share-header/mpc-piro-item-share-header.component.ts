import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-piro-item-share-header',
    templateUrl: './mpc-piro-item-share-header.component.html',
    styleUrl: './mpc-piro-item-share-header.component.scss'
})
export class MpcPiroItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
