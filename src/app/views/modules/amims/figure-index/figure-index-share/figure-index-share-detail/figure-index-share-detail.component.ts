import { Component, Input } from '@angular/core';
import type { AmimsFigureIndexDto } from 'de-sdk-core/models';

@Component({
    selector: 'app-figure-index-share-detail',
    templateUrl: './figure-index-share-detail.component.html',
    styleUrl: './figure-index-share-detail.component.scss'
})
export class FigureIndexShareDetailComponent {
    @Input('figureIndex') data: AmimsFigureIndexDto = {
  idFigureIndex: ''
};
}
