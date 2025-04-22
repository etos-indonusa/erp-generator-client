import { Component, Input, SimpleChanges } from '@angular/core';
import { QaRpdWidgetService } from 'de-sdk-core/services/qa-rpd-widget.service';

@Component({
    selector: 'app-qa-rpd-share-widget',
    templateUrl: './qa-rpd-share-widget.component.html',
    styleUrl: './qa-rpd-share-widget.component.scss'
})
export class QaRpdShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private qaRpdWidgetService: QaRpdWidgetService,
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
    //[{"type":"count","field":"status_qa-rpd_site","alias":"total"}, {"type":"max","field":"status_qa-rpd_site","alias":"status_qa-rpd_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.qaRpdWidgetService
            .qaRpdWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_qa_rpd" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_qa_rpd'],
                    sortKey: "status_qa_rpd",
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
