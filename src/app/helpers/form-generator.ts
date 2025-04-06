import { ValidatorFn, Validators, FormBuilder, FormGroup } from '@angular/forms';

type FormSchemaField = {
    default?: any;
    required: boolean;
};

export function generateFormFromSchema<T>(
    fb: FormBuilder,
    schema: Record<string, FormSchemaField>,
    customValidatorMap: Record<string, ValidatorFn[]> = {} // ← tambahkan ini
): FormGroup {
    const group: any = {};

    Object.entries(schema).forEach(([key, config]) => {
        const defaultValue = config.default ?? null;

        const validators: ValidatorFn[] = [];
        if (config.required) validators.push(Validators.required);
        if (customValidatorMap[key]) validators.push(...customValidatorMap[key]);

        group[key] = fb.control(defaultValue, validators);
    });

    return fb.group(group);
}
