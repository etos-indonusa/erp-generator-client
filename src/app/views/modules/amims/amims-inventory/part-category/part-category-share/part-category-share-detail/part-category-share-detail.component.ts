import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartCategoryReportDto } from 'de-sdk-core';
import { PartCategoryReportService } from 'de-sdk-core';

@Component({
    selector: 'app-part-category-share-detail',
    templateUrl: './part-category-share-detail.component.html',
    styleUrl: './part-category-share-detail.component.scss'
})
export class PartCategoryShareDetailComponent { 
    @Input('idPartCategory') idPartCategory: string // replace dengan id+Nama
    constructor(
        private partCategoryReportService: PartCategoryReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    partCategory: AmimsPartCategoryReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partCategoryReportService.partCategoryReportControllerFindOne({ id: this.idPartCategory }).subscribe(
            data => {
                this.partCategory = data.data || null;
                this.is_loading = false;
                this.reload++
            },
            err => {
                this.is_loading = false;
            }
        )
    }

    // artinya one to many 
    getListData()
    {

    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/partCategory/' + this.idPartCategory + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
