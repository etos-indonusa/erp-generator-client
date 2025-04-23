import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTdDetailFormSchema } from 'de-sdk-core/lib/form-schema/amims-td-detail.form-schema';
import type { AmimsTdDetailDto } from 'de-sdk-core/lib/models';
import { TdDetailService, UsersService } from 'de-sdk-core/lib/services';
 
import { ActypeService } from 'de-sdk-core/lib/services';
import { TdService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-td-detail-share-add',
    templateUrl: './td-detail-share-add.component.html',
    styleUrl: './td-detail-share-add.component.scss'
})
export class TdDetailShareAddComponent {
    @Input('tdDetail') tdDetail: AmimsTdDetailDto = {
        idTdDetail: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tdDetail && this.tdDetail.idTdDetail) {
            this.form?.patchValue(this.tdDetail);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private tdDetailService: TdDetailService,
        private usersService: UsersService, 
        private actypeService: ActypeService,
        private tdService: TdService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTdDetailFormSchema, {
            kodeTdDetail: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'TdDetail');

        this.getAllAcc();
        this.getAllAccQa();
        this.getAllActype();
        this.getAllTd();
    }

    listAcc: any[] = [];

    listAccQa: any[] = [];

    listActype: any[] = [];

    listTd: any[] = [];


    // untuk fungsi get ALL relation
    getAllAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listAcc = data.data ?? []
        );
    }
    getAllAccQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listAccQa = data.data ?? []
        );
    }
    getAllActype() {
        this.actypeService.actypeControllerFindAll().subscribe(
            data => this.listActype = data.data ?? []
        );
    }
    getAllTd() {
        this.tdService.tdControllerFindAll().subscribe(
            data => this.listTd = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsTdDetailFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.tdDetail.idTdDetail ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.tdDetailService.tdDetailControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdDetail berhasil disimpan.');
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
        this.tdDetailService.tdDetailControllerUpdate({ id: this.tdDetail.idTdDetail, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdDetail berhasil diperbarui.');
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
