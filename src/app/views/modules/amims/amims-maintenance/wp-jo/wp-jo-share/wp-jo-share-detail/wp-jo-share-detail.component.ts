import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsWpJoReportDto } from 'de-sdk-core';
import { WpJoReportService } from 'de-sdk-core';
import { WpJoShareAddComponent } from '../wp-jo-share-add/wp-jo-share-add.component';

@Component({
    selector: 'app-wp-jo-share-detail',
    templateUrl: './wp-jo-share-detail.component.html',
    styleUrl: './wp-jo-share-detail.component.scss'
})
export class WpJoShareDetailComponent { 
    @Input('idWpJo') idWpJo: string // replace dengan id+Nama
    constructor(
        private wpJoReportService: WpJoReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private cd: ChangeDetectorRef,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    wpJo: AmimsWpJoReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.wpJoReportService.wpJoReportControllerFindOne({ id: this.idWpJo }).subscribe(
            data => {
                this.wpJo = data.data || null;
                this.is_loading = false;
                this.reload++
                this.cd.detectChanges(); // force change detection to update the view
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
    update()
    {
    const drawerRef = this.drawerService.create <WpJoShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: WpJoShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                wpJo: this.wpJo || undefined
    }
});

drawerRef.afterClose.subscribe(() => {
    this.getData();
});
    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/wpJo/' + this.idWpJo + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
