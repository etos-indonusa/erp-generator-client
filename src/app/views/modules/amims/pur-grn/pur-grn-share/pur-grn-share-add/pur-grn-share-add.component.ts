import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurGrnFormSchema } from 'src/sdk/core/form-schema/amims-pur-grn.form-schema'; 
import type  { AmimsPurGrnDto } from 'src/sdk/core/models';
import { PurGrnService } from 'src/sdk/core/services';

import { PurVendorService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-grn-share-add',
    templateUrl: './pur-grn-share-add.component.html',
    styleUrl: './pur-grn-share-add.component.scss'
})
export class PurGrnShareAddComponent {
    @Input('purGrn') purGrn: AmimsPurGrnDto = {
  idPurGrn: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purGrn && this.purGrn.idPurGrn) {
        this.form?.patchValue(this.purGrn);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purGrnService: PurGrnService,
                        private purVendorService: PurVendorService,
                private siteService: SiteService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurGrnFormSchema, {
            kodePurGrn: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurGrn');

                            this.getAllPurVendor();
                    this.getAllSite();
                    this.getAllUser();
                    }
    
    listPurVendor: any[] = [];
    
    listSite: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
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
        const labelMap = extractLabels(AmimsPurGrnFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purGrn.idPurGrn ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purGrnService.purGrnControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purGrn berhasil disimpan.');
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
        this.purGrnService.purGrnControllerUpdate({ id: this.purGrn.idPurGrn, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purGrn berhasil diperbarui.');
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
