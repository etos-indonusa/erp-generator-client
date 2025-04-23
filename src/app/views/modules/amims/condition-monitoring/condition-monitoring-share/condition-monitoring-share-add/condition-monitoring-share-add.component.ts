import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsConditionMonitoringFormSchema } from 'de-sdk-core/lib/form-schema/amims-condition-monitoring.form-schema'; 
import type  { AmimsConditionMonitoringDto } from 'de-sdk-core/lib/models';
import { ConditionMonitoringService } from 'de-sdk-core/lib/services';


@Component({
    selector: 'app-condition-monitoring-share-add',
    templateUrl: './condition-monitoring-share-add.component.html',
    styleUrl: './condition-monitoring-share-add.component.scss'
})
export class ConditionMonitoringShareAddComponent {
    @Input('conditionMonitoring') conditionMonitoring: AmimsConditionMonitoringDto = {
  idConditionMonitoring: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.conditionMonitoring && this.conditionMonitoring.idConditionMonitoring) {
        this.form?.patchValue(this.conditionMonitoring);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private conditionMonitoringService: ConditionMonitoringService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsConditionMonitoringFormSchema, {
            kodeConditionMonitoring: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'ConditionMonitoring');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsConditionMonitoringFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.conditionMonitoring.idConditionMonitoring ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.conditionMonitoringService.conditionMonitoringControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data conditionMonitoring berhasil disimpan.');
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
        this.conditionMonitoringService.conditionMonitoringControllerUpdate({ id: this.conditionMonitoring.idConditionMonitoring, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data conditionMonitoring berhasil diperbarui.');
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
