import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-jo-operator-share-header',
    templateUrl: './mpc-jo-operator-share-header.component.html',
    styleUrl: './mpc-jo-operator-share-header.component.scss'
})
export class MpcJoOperatorShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
