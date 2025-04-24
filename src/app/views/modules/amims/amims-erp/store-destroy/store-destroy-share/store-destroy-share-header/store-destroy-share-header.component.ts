import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-store-destroy-share-header',
    templateUrl: './store-destroy-share-header.component.html',
    styleUrl: './store-destroy-share-header.component.scss'
})
export class StoreDestroyShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
