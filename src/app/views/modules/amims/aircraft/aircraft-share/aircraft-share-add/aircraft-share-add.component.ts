import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsAircraftFormSchema } from 'de-sdk-core/lib/form-schema/amims-aircraft.form-schema'; 
import type  { AmimsAircraftDto } from 'de-sdk-core/lib/models';
import { AircraftService } from 'de-sdk-core/lib/services';

import { ActypeService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-aircraft-share-add',
    templateUrl: './aircraft-share-add.component.html',
    styleUrl: './aircraft-share-add.component.scss'
})
export class AircraftShareAddComponent {
    @Input('aircraft') aircraft: AmimsAircraftDto = {
  idAircraft: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.aircraft && this.aircraft.idAircraft) {
        this.form?.patchValue(this.aircraft);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private aircraftService: AircraftService,
                        private actypeService: ActypeService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsAircraftFormSchema, {
            kodeAircraft: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'Aircraft');

                            this.getAllActype();
                    }
    
    listActype: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllActype() {
    this.actypeService.actypeControllerFindAll().subscribe(
      data => this.listActype = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsAircraftFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.aircraft.idAircraft ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.aircraftService.aircraftControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data aircraft berhasil disimpan.');
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
        this.aircraftService.aircraftControllerUpdate({ id: this.aircraft.idAircraft, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data aircraft berhasil diperbarui.');
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
