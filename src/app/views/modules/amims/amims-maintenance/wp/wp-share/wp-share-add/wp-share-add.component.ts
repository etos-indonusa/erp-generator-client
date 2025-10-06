import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsWpFormSchema } from 'de-sdk-core';
import type { AmimsWpDto } from 'de-sdk-core';
import { WpService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
    selector: 'app-wp-share-add',
    templateUrl: './wp-share-add.component.html',
    styleUrl: './wp-share-add.component.scss'
})
export class WpShareAddComponent {
    @Input('wp') wp: AmimsWpDto = {
        idWp: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.wp && this.wp.idWp) {
            this.form?.patchValue(this.wp);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private wpService: WpService,
        private aircraftService: AircraftService,
        private userInfoService: UserInfoService,
        private siteService: SiteService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsWpFormSchema, {
            idAircraft: [Validators.required],
            idSite: [Validators.required],
        }, 'Wp');

        this.getAllAircraft();
        this.getAllSite();

        if (this.wp.idWp) {
            this.form.patchValue(this.wp);
        } else {
            this.form.patchValue({
                statusWp: 'OPEN',
                idUser: this.userInfoService.getUser.id,
                validasi:1
            });
        }
    }

    listAircraft: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserMm: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsWpFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.wp.idWp ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.wpService.wpControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data wp berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.wpService.wpControllerUpdate({ id: this.wp.idWp, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data wp berhasil diperbarui.');
                this.nzDrawerRef.close(data);
                this.cd.detectChanges()
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
