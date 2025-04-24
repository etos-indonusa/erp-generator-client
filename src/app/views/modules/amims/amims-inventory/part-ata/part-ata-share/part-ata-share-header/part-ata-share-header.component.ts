import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-ata-share-header',
    templateUrl: './part-ata-share-header.component.html',
    styleUrl: './part-ata-share-header.component.scss'
})
export class PartAtaShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
