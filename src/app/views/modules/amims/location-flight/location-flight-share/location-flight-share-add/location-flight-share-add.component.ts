import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLocationFlightFormSchema } from 'de-sdk-core'; 
import type { AmimsLocationFlightDto } from 'de-sdk-core';
import { LocationFlightService } from 'de-sdk-core';

 
@Component({
    selector: 'app-location-flight-share-add',
    templateUrl: './location-flight-share-add.component.html',
    styleUrl: './location-flight-share-add.component.scss'
})
export class LocationFlightShareAddComponent {
    @Input('locationFlight') locationFlight: AmimsLocationFlightDto = {
  idLocationFlight: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.locationFlight && this.locationFlight.idLocationFlight) {
        this.form?.patchValue(this.locationFlight);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private locationFlightService: LocationFlightService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLocationFlightFormSchema, {
            // kodeLocationFlight: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'LocationFlight');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsLocationFlightFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.locationFlight.idLocationFlight ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.locationFlightService.locationFlightControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data locationFlight berhasil disimpan.');
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
        this.locationFlightService.locationFlightControllerUpdate({ id: this.locationFlight.idLocationFlight, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data locationFlight berhasil diperbarui.');
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
