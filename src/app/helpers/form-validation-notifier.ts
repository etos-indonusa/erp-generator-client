import { FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export function extractLabels(schema: any): Record<string, string> {
    return Object.keys(schema).reduce((acc, key) => {
        acc[key] = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()); // namaKantor → Nama Kantor
        return acc;
    }, {} as Record<string, string>);
}

export function showFormValidationWarnings(
    form: FormGroup,
    notify: NzNotificationService,
    labelMap?: Record<string, string>
): boolean {
    if (!form.invalid) return false;

    const errorFields = Object.keys(form.controls).filter(k => form.get(k)?.invalid);
    const labelList = errorFields.map(k => labelMap?.[k] || k).join(', ');

    notify.warning('Validasi Gagal', `Harap isi kolom berikut: ${labelList}`);
    return true;
}
