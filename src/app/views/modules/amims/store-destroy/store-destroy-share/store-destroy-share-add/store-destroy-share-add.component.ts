import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsStoreDestroyFormSchema } from 'src/sdk/core/form-schema/amims-store-destroy.form-schema';
import type { AmimsStoreDestroyDto } from 'src/sdk/core/models';
import { StoreDestroyService, UsersService } from 'src/sdk/core/services';

import { PartService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';

@Component({
    selector: 'app-store-destroy-share-add',
    templateUrl: './store-destroy-share-add.component.html',
    styleUrl: './store-destroy-share-add.component.scss'
})
export class StoreDestroyShareAddComponent {
    @Input('storeDestroy') storeDestroy: AmimsStoreDestroyDto = {
        idStoreDestroy: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.storeDestroy && this.storeDestroy.idStoreDestroy) {
            this.form?.patchValue(this.storeDestroy);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private storeDestroyService: StoreDestroyService,
        private partService: PartService,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsStoreDestroyFormSchema, {
            kodeStoreDestroy: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'StoreDestroy');

        this.getAllPart();
        this.getAllSite();
        this.getAllUser();
    }

    listPart: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];


    // untuk fungsi get ALL relation
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }
    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsStoreDestroyFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.storeDestroy.idStoreDestroy ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.storeDestroyService.storeDestroyControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeDestroy berhasil disimpan.');
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
        this.storeDestroyService.storeDestroyControllerUpdate({ id: this.storeDestroy.idStoreDestroy, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeDestroy berhasil diperbarui.');
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
