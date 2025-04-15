import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   PelangganInvoiceReportDto } from 'src/sdk/core/models';
import { InvoiceReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-invoice-share-detail',
    templateUrl: './invoice-share-detail.component.html',
    styleUrl: './invoice-share-detail.component.scss'
})
export class InvoiceShareDetailComponent { 
    @Input('idInvoice') idInvoice: string // replace dengan id+Nama
    constructor(
        private invoiceReportService: InvoiceReportService,

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
    invoice: PelangganInvoiceReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.invoiceReportService.invoiceReportControllerFindOne({ id: this.idInvoice }).subscribe(
            data => {
                this.invoice = data.data || null;
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

    print() {
    let url = environment.srv_document + '/pdf/invoice/' + this.idInvoice + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
