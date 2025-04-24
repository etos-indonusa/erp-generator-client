import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-actype-share-header',
    templateUrl: './actype-share-header.component.html',
    styleUrl: './actype-share-header.component.scss'
})
export class ActypeShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
