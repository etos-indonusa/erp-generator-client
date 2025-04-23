import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerRtiWidgetService } from 'de-sdk-core/lib/services/engineer-rti-widget.service';

@Component({
    selector: 'app-engineer-rti-share-widget',
    templateUrl: './engineer-rti-share-widget.component.html',
    styleUrl: './engineer-rti-share-widget.component.scss'
})
export class EngineerRtiShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerRtiWidgetService: EngineerRtiWidgetService,
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
    //[{"type":"count","field":"status_engineer-rti_site","alias":"total"}, {"type":"max","field":"status_engineer-rti_site","alias":"status_engineer-rti_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerRtiWidgetService
            .engineerRtiWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_rti" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_rti'],
                    sortKey: "status_engineer_rti",
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
