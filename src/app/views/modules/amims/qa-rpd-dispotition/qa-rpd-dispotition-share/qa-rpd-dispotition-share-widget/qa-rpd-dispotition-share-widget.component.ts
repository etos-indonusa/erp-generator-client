import { Component, Input, SimpleChanges } from '@angular/core';
import { QaRpdDispotitionWidgetService } from 'src/sdk/core/services/qa-rpd-dispotition-widget.service';

@Component({
    selector: 'app-qa-rpd-dispotition-share-widget',
    templateUrl: './qa-rpd-dispotition-share-widget.component.html',
    styleUrl: './qa-rpd-dispotition-share-widget.component.scss'
})
export class QaRpdDispotitionShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private qaRpdDispotitionWidgetService: QaRpdDispotitionWidgetService,
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
    //[{"type":"count","field":"status_qa-rpd-dispotition_site","alias":"total"}, {"type":"max","field":"status_qa-rpd-dispotition_site","alias":"status_qa-rpd-dispotition_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.qaRpdDispotitionWidgetService
            .qaRpdDispotitionWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_qa_rpd_dispotition" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_qa_rpd_dispotition'],
                    sortKey: "status_qa_rpd_dispotition",
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
