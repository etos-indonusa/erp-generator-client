import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'document-list-v3',
  templateUrl: './list-v3.component.html',
  styleUrl: './list-v3.component.scss'
})
export class ListV3Component {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()
}
