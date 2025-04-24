import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pmtr-share-header',
    templateUrl: './engineer-pmtr-share-header.component.html',
    styleUrl: './engineer-pmtr-share-header.component.scss'
})
export class EngineerPmtrShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
