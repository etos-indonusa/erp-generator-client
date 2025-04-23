import { Component, Input, SimpleChanges } from '@angular/core';
import { PartidWidgetService } from 'de-sdk-core/lib/services/partid-widget.service';

@Component({
    selector: 'app-partid-share-widget',
    templateUrl: './partid-share-widget.component.html',
    styleUrl: './partid-share-widget.component.scss'
})
export class PartidShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partidWidgetService: PartidWidgetService,
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
    //[{"type":"count","field":"status_partid_site","alias":"total"}, {"type":"max","field":"status_partid_site","alias":"status_partid_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partidWidgetService
            .partidWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_partid" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_partid'],
                    sortKey: "status_partid",
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
