import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsSiteFormSchema } from 'de-sdk-core';
import type { AmimsSiteDto } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';


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
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private siteService: SiteService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsSiteFormSchema, {
        }, 'Site');

    }

    listNewSite: any[] = [];

    listUser: any[] = [];




    submit(): void {
        const labelMap = extractLabels(AmimsSiteFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.site.idSite ? this.update() : this.simpan();

        if(this.site.idSite) {
            this.form?.patchValue(this.site);
        }
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
                this.cd.detectChanges()
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
