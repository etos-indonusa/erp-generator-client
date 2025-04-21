import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-log-share-header',
    templateUrl: './part-log-share-header.component.html',
    styleUrl: './part-log-share-header.component.scss'
})
export class PartLogShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
