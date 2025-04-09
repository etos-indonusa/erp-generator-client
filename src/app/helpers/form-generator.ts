import { FormBuilder, ValidatorFn, FormGroup, Validators } from "@angular/forms";

type FormSchemaField = {
    default?: any;
    required?: boolean;
    primary?: boolean;
};

export function generateFormFromSchema<T>(
    fb: FormBuilder,
    schema: Record<string, FormSchemaField>,
    customValidatorMap: Record<string, ValidatorFn[]> = {},
    modelName?: string // optional untuk deteksi otomatis id-nya
): FormGroup {
    const group: any = {};

    Object.entries(schema).forEach(([key, config]) => {
        const defaultValue = config.default ?? null;

        const validators: ValidatorFn[] = [];

        const isPrimary = config.primary === true;
        const isAutoIdField = modelName && key === `id${modelName}`;

        const skipRequired = isPrimary || isAutoIdField;

        if (config.required && !skipRequired) {
            validators.push(Validators.required);
        }

        if (customValidatorMap[key]) {
            validators.push(...customValidatorMap[key]);
        }

        group[key] = fb.control(defaultValue, validators);
    });

    return fb.group(group);
}
