import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pris-share-header',
    templateUrl: './engineer-pris-share-header.component.html',
    styleUrl: './engineer-pris-share-header.component.scss'
})
export class EngineerPrisShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
