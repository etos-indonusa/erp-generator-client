import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerRtiPartWidgetService } from 'src/sdk/core/services/engineer-rti-part-widget.service';

@Component({
    selector: 'app-engineer-rti-part-share-widget',
    templateUrl: './engineer-rti-part-share-widget.component.html',
    styleUrl: './engineer-rti-part-share-widget.component.scss'
})
export class EngineerRtiPartShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerRtiPartWidgetService: EngineerRtiPartWidgetService,
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
    //[{"type":"count","field":"status_engineer-rti-part_site","alias":"total"}, {"type":"max","field":"status_engineer-rti-part_site","alias":"status_engineer-rti-part_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerRtiPartWidgetService
            .engineerRtiPartWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_rti_part" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_rti_part'],
                    sortKey: "status_engineer_rti_part",
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
