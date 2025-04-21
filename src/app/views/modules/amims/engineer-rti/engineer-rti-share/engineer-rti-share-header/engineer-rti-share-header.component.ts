import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-rti-share-header',
    templateUrl: './engineer-rti-share-header.component.html',
    styleUrl: './engineer-rti-share-header.component.scss'
})
export class EngineerRtiShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
