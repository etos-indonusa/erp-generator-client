import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpart-share-header',
    templateUrl: './mpart-share-header.component.html',
    styleUrl: './mpart-share-header.component.scss'
})
export class MpartShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
