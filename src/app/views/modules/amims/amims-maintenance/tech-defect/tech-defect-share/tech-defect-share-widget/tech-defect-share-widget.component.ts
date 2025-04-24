import { Component, Input, SimpleChanges } from '@angular/core';
import { TechDefectWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-tech-defect-share-widget',
    templateUrl: './tech-defect-share-widget.component.html',
    styleUrl: './tech-defect-share-widget.component.scss'
})
export class TechDefectShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private techDefectWidgetService: TechDefectWidgetService,
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
    //[{"type":"count","field":"status_tech-defect_site","alias":"total"}, {"type":"max","field":"status_tech-defect_site","alias":"status_tech-defect_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.techDefectWidgetService
            .techDefectWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_tech_defect" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_tech_defect'],
                    sortKey: "status_tech_defect",
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
