import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsAircraftDetailFormSchema } from 'src/sdk/core/form-schema/amims-aircraft-detail.form-schema'; 
import type  { AmimsAircraftDetailDto } from 'src/sdk/core/models';
import { AircraftDetailService } from 'src/sdk/core/services';


@Component({
    selector: 'app-aircraft-detail-share-add',
    templateUrl: './aircraft-detail-share-add.component.html',
    styleUrl: './aircraft-detail-share-add.component.scss'
})
export class AircraftDetailShareAddComponent {
    @Input('aircraftDetail') aircraftDetail: AmimsAircraftDetailDto = {
  idAircraftDetail: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.aircraftDetail && this.aircraftDetail.idAircraftDetail) {
        this.form?.patchValue(this.aircraftDetail);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private aircraftDetailService: AircraftDetailService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsAircraftDetailFormSchema, {
            kodeAircraftDetail: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'AircraftDetail');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsAircraftDetailFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.aircraftDetail.idAircraftDetail ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.aircraftDetailService.aircraftDetailControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data aircraftDetail berhasil disimpan.');
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
        this.aircraftDetailService.aircraftDetailControllerUpdate({ id: this.aircraftDetail.idAircraftDetail, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data aircraftDetail berhasil diperbarui.');
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
