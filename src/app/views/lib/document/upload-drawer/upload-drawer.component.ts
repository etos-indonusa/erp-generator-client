import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'document-upload-drawer',
  templateUrl: './upload-drawer.component.html',
  styleUrl: './upload-drawer.component.scss'
})
export class UploadDrawerComponent {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()
}
