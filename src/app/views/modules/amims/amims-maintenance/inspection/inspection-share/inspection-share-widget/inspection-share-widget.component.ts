import { Component, Input, SimpleChanges } from '@angular/core';
import { InspectionWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-inspection-share-widget',
    templateUrl: './inspection-share-widget.component.html',
    styleUrl: './inspection-share-widget.component.scss'
})
export class InspectionShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private inspectionWidgetService: InspectionWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
        this.getDataWidget()
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_inspection_site","alias":"total"}, {"type":"max","field":"status_inspection_site","alias":"status_inspection_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.inspectionWidgetService
            .inspectionWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_inspection" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_inspection'],
                    sortKey: "status_inspection",
                    sortValue: "ASC"
                }
            })
            .subscribe((data) => {
                this.total = data.total ?? 0;
                this.status_urutan = data.data ?? [] ; 
                this.status_urutan.forEach(x => {
                    this.total = this.total + x.jumlah * 1
                })
                this.is_loading = false;
            });
    }
}
