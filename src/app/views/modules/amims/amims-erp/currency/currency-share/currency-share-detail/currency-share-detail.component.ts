import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsCurrencyReportDto } from 'de-sdk-core';
import { CurrencyReportService } from 'de-sdk-core';

@Component({
    selector: 'app-currency-share-detail',
    templateUrl: './currency-share-detail.component.html',
    styleUrl: './currency-share-detail.component.scss'
})
export class CurrencyShareDetailComponent { 
    @Input('idCurrency') idCurrency: string // replace dengan id+Nama
    constructor(
        private currencyReportService: CurrencyReportService,

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
    currency: AmimsCurrencyReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.currencyReportService.currencyReportControllerFindOne({ id: this.idCurrency }).subscribe(
            data => {
                this.currency = data.data || null;
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
    let url = environment.srv_document + '/pdf/currency/' + this.idCurrency + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
