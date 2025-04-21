import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-jo-share-header',
    templateUrl: './mpc-jo-share-header.component.html',
    styleUrl: './mpc-jo-share-header.component.scss'
})
export class MpcJoShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
