import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AircraftReportService } from 'de-sdk-core';

@Component({
    selector: 'app-airctat-detail',
    templateUrl: './airctat-detail.component.html',
    styleUrl: './airctat-detail.component.scss'
})
export class AirctatDetailComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
        private aircraftReportService: AircraftReportService,
    ) { }
    id_aicraft: any = null
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(
            data => {
                if (data.get('id_aicraft')) {
                    this.id_aicraft = data.get('id_aicraft');
                    console.log(this.id_aicraft)
                    this.getData();
                }
            }
        );
    }

    activeTabIndex = 3;

    onTabChange(index: number): void {
        this.activeTabIndex = index;
    }
    

    aircrafts: any = {};
    getData() {
        this.aircraftReportService.aircraftReportControllerFindOne({ id: this.id_aicraft }).subscribe(
            data => {
                this.aircrafts = data.data
            }
        )
    }

    months = [
        { name: 'Jan 23', value: 12.40, editable: false },
        { name: 'Feb 23', value: 12.40, editable: false },
        { name: 'Mar 23', value: 12.40, editable: false },
        { name: 'Apr 23', value: 12.40, editable: false },
        { name: 'May 23', value: 4.20, editable: false },
        { name: 'Jun 23', value: null, editable: true },
        { name: 'Jul 23', value: null, editable: true },
        { name: 'Aug 23', value: null, editable: true },
        { name: 'Sep 23', value: null, editable: true },
        { name: 'Oct 23', value: null, editable: true },
        { name: 'Nov 23', value: null, editable: true },
        { name: 'Dec 23', value: null, editable: true }
    ];
    pageIndex = 1;
    pageSize = 9;

    get paginatedMonths() {
        const start = (this.pageIndex - 1) * this.pageSize;
        return this.months.slice(start, start + this.pageSize);
    }

    onPageChange(page: number): void {
        this.pageIndex = page;
    }

}
