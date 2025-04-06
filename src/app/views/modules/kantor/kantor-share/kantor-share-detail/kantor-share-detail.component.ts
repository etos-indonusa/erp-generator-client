import { Component, Input } from '@angular/core';
import type { KantorDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-kantor-share-detail',
    templateUrl: './kantor-share-detail.component.html',
    styleUrl: './kantor-share-detail.component.scss'
})
export class KantorShareDetailComponent {
    @Input('kantor') data: KantorDto = {
        idKantor: '',
        namaKantor: ''
    }
}
