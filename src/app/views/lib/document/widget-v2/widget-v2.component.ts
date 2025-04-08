import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'document-widget-v2',
  templateUrl: './widget-v2.component.html',
  styleUrl: './widget-v2.component.scss'
})
export class WidgetV2Component {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()
}
