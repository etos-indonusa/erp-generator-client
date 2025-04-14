import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-workflow-step-add-triger-builder',
  templateUrl: './workflow-step-add-triger-builder.component.html',
  styleUrl: './workflow-step-add-triger-builder.component.scss'
})
export class WorkflowStepAddTrigerBuilderComponent {
    triggers: any[] = [];

    @Output() triggerJsonChanged = new EventEmitter<string>();

    triggerTypes = [
        { label: 'SQL Trigger', value: 'sql' },
        { label: 'HTTP Call', value: 'http' }
    ];

    addTrigger() {
        this.triggers.push({ type: 'sql', query: '' });
        this.emitJson();
    }

    removeTrigger(index: number) {
        this.triggers.splice(index, 1);
        this.emitJson();
    }

    onTypeChange(trigger: any) {
        if (trigger.type === 'sql') {
            trigger.query = '';
        } else if (trigger.type === 'http') {
            trigger.url = '';
            trigger.method = 'POST';
            trigger.payload = '{}';
        }
        this.emitJson();
    }

    emitJson() {
        const cleaned = this.triggers.map(t => {
            if (t.type === 'sql') {
                return { type: t.type, query: t.query };
            } else if (t.type === 'http') {
                return {
                    type: t.type,
                    url: t.url,
                    method: t.method,
                    payload: this.safeParse(t.payload)
                };
            }
            return {};
        });
        this.triggerJsonChanged.emit(JSON.stringify(cleaned, null, 2));
    }

    safeParse(json: string) {
        try {
            return JSON.parse(json);
        } catch {
            return {};
        }
    }

    getJson(): string {
        return JSON.stringify(this.triggers, null, 2);
    }

    loadFromJson(data: any[]) {
        this.triggers = data.map((t) => {
            if (t.type === 'http') {
                return { ...t, payload: JSON.stringify(t.payload ?? {}, null, 2) };
            }
            return { ...t };
        });
    }
}
