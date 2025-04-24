import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mpart-detail',
    templateUrl: './mpart-detail.component.html',
    styleUrl: './mpart-detail.component.scss'
})
export class MpartDetailComponent {
    constructor(
        private router: ActivatedRoute
    ) { }

    breadCrumbItems: any[] = []
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.breadCrumbItems = [
            { label: 'mpart', active: true },
            { label: 'detail', active: true }
        ];
        this.router.paramMap.subscribe(x => {
            this.idMpart = x.get('id_mpart')
        })
    }

    idMpart: any = null
}
