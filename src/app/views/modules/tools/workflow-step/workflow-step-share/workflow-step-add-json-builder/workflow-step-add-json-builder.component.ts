import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-workflow-step-add-json-builder',
  templateUrl: './workflow-step-add-json-builder.component.html',
  styleUrl: './workflow-step-add-json-builder.component.scss'
})
export class WorkflowStepAddJsonBuilderComponent {
    rules: any[] = [];

    @Output() ruleJsonChanged = new EventEmitter<string>();

    ruleTypes = [
        { label: 'Count Check', value: 'count_check' },
        { label: 'Custom SQL', value: 'custom_sql' },
    ];

    addRule() {
        this.rules.push({ type: 'count_check', table: '', min: 1, filterJson: '{}' });
        this.emitJson();
    }

    removeRule(index: number) {
        this.rules.splice(index, 1);
        this.emitJson();
    }

    onTypeChange(rule: any) {
        if (rule.type === 'count_check') {
            rule.table = '';
            rule.min = 1;
            rule.filterJson = '{}';
        } else if (rule.type === 'custom_sql') {
            rule.query = '';
            rule.min = 1;
        }
        this.emitJson();
    }

    emitJson() {
        const finalRules = this.rules.map((r) => {
            if (r.type === 'count_check') {
                return {
                    type: r.type,
                    table: r.table,
                    min: r.min,
                    filter: this.safeParse(r.filterJson),
                };
            } else if (r.type === 'custom_sql') {
                return {
                    type: r.type,
                    query: r.query,
                    min: r.min,
                };
            }
            return {};
        });

        const json = JSON.stringify({ rules: finalRules }, null, 2);
        this.ruleJsonChanged.emit(json);
    }

    safeParse(json: string) {
        try {
            return JSON.parse(json);
        } catch {
            return {};
        }
    }

    getRuleJson(): string {
        const finalRules = this.rules.map((r) => {
            if (r.type === 'count_check') {
                return {
                    type: r.type,
                    table: r.table,
                    min: r.min,
                    filter: this.safeParse(r.filterJson),
                };
            } else if (r.type === 'custom_sql') {
                return {
                    type: r.type,
                    query: r.query,
                    min: r.min,
                };
            }
            return {};
        });

        return JSON.stringify({ rules: finalRules }, null, 2);
    }
}
