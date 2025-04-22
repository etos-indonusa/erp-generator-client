import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsSiteFormSchema } from 'de-sdk-core/form-schema/amims-site.form-schema';
import type { AmimsSiteDto } from 'de-sdk-core/models';
import { SiteService } from 'de-sdk-core/services';

import { UsersService } from 'de-sdk-core/services';

@Component({
    selector: 'app-site-share-add',
    templateUrl: './site-share-add.component.html',
    styleUrl: './site-share-add.component.scss'
})
export class SiteShareAddComponent {
    @Input('site') site: AmimsSiteDto = {
        idSite: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.site && this.site.idSite) {
            this.form?.patchValue(this.site);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsSiteFormSchema, {
            // kodeSite: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'Site');

        this.getAllUser();
    }

    listNewSite: any[] = [];

    listUser: any[] = [];



    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsSiteFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.site.idSite ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.siteService.siteControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data site berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.siteService.siteControllerUpdate({ id: this.site.idSite, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data site berhasil diperbarui.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat memperbarui.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
