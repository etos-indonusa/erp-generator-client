import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'document-upload-inline',
  templateUrl: './upload-inline.component.html',
  styleUrl: './upload-inline.component.scss'
})
export class UploadInlineComponent {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()
}
