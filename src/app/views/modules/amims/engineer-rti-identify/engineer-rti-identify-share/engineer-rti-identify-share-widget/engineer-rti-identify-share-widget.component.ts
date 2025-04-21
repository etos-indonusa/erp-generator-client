import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerRtiIdentifyWidgetService } from 'src/sdk/core/services/engineer-rti-identify-widget.service';

@Component({
    selector: 'app-engineer-rti-identify-share-widget',
    templateUrl: './engineer-rti-identify-share-widget.component.html',
    styleUrl: './engineer-rti-identify-share-widget.component.scss'
})
export class EngineerRtiIdentifyShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerRtiIdentifyWidgetService: EngineerRtiIdentifyWidgetService,
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
    //[{"type":"count","field":"status_engineer-rti-identify_site","alias":"total"}, {"type":"max","field":"status_engineer-rti-identify_site","alias":"status_engineer-rti-identify_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerRtiIdentifyWidgetService
            .engineerRtiIdentifyWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_rti_identify" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_rti_identify'],
                    sortKey: "status_engineer_rti_identify",
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
