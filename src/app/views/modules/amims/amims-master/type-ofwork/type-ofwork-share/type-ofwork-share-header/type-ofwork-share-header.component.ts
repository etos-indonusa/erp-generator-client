import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-type-ofwork-share-header',
    templateUrl: './type-ofwork-share-header.component.html',
    styleUrl: './type-ofwork-share-header.component.scss'
})
export class TypeOfworkShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
