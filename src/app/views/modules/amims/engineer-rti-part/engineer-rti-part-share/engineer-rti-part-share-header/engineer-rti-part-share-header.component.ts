import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-rti-part-share-header',
    templateUrl: './engineer-rti-part-share-header.component.html',
    styleUrl: './engineer-rti-part-share-header.component.scss'
})
export class EngineerRtiPartShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
