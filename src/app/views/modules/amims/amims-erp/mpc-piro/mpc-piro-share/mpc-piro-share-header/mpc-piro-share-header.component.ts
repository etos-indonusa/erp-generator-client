import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-piro-share-header',
    templateUrl: './mpc-piro-share-header.component.html',
    styleUrl: './mpc-piro-share-header.component.scss'
})
export class MpcPiroShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
