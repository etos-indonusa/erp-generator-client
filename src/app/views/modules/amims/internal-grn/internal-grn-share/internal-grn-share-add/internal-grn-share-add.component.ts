import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsInternalGrnFormSchema } from 'de-sdk-core/form-schema/amims-internal-grn.form-schema'; 
import type  { AmimsInternalGrnDto } from 'de-sdk-core/models';
import { InternalGrnService } from 'de-sdk-core/services';

import { SiteService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services'; 

@Component({
    selector: 'app-internal-grn-share-add',
    templateUrl: './internal-grn-share-add.component.html',
    styleUrl: './internal-grn-share-add.component.scss'
})
export class InternalGrnShareAddComponent {
    @Input('internalGrn') internalGrn: AmimsInternalGrnDto = {
  idInternalGrn: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.internalGrn && this.internalGrn.idInternalGrn) {
        this.form?.patchValue(this.internalGrn);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private internalGrnService: InternalGrnService,
                        private siteService: SiteService,
                private usersService: UsersService, 
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsInternalGrnFormSchema, {
            kodeInternalGrn: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'InternalGrn');

                            this.getAllSite();
                    this.getAllUser();
                    this.getAllUserAcc();
                    }
    
    listSite: any[] = [];
    
    listUser: any[] = [];
    
    listUserAcc: any[] = [];
    

    // untuk fungsi get ALL relation
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
        getAllUserAcc() {
            this.usersService.usersControllerFindAll().subscribe(
      data => this.listUserAcc = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsInternalGrnFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.internalGrn.idInternalGrn ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.internalGrnService.internalGrnControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data internalGrn berhasil disimpan.');
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
        this.internalGrnService.internalGrnControllerUpdate({ id: this.internalGrn.idInternalGrn, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data internalGrn berhasil diperbarui.');
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
