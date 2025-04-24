import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-share-header',
    templateUrl: './part-share-header.component.html',
    styleUrl: './part-share-header.component.scss'
})
export class PartShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
