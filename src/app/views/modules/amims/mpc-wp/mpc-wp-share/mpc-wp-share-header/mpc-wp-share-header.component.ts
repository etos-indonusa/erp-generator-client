import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-wp-share-header',
    templateUrl: './mpc-wp-share-header.component.html',
    styleUrl: './mpc-wp-share-header.component.scss'
})
export class MpcWpShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
