import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-part-detail',
    templateUrl: './part-detail.component.html',
    styleUrl: './part-detail.component.scss'
})
export class PartDetailComponent {

    constructor(
        private router: ActivatedRoute
    ) { }

    breadCrumbItems: any[] = []
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.breadCrumbItems = [
            { label: 'Part', active: true },
            { label: 'detail', active: true }
        ];
        this.router.paramMap.subscribe(x => {
            this.idPart = x.get('id_part')
        })
    }

    idPart: any = null
}
