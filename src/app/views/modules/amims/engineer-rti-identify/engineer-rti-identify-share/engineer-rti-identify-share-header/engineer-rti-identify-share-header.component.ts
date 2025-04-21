import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-rti-identify-share-header',
    templateUrl: './engineer-rti-identify-share-header.component.html',
    styleUrl: './engineer-rti-identify-share-header.component.scss'
})
export class EngineerRtiIdentifyShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
