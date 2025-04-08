import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'document-list-v2',
  templateUrl: './list-v2.component.html',
  styleUrl: './list-v2.component.scss'
})
export class ListV2Component {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()
}
