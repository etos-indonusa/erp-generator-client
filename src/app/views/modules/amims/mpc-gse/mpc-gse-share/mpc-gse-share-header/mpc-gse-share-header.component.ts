import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-gse-share-header',
    templateUrl: './mpc-gse-share-header.component.html',
    styleUrl: './mpc-gse-share-header.component.scss'
})
export class MpcGseShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
