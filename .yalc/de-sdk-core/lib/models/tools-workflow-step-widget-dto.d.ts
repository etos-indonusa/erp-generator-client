export interface ToolsWorkflowStepWidgetDto {
    allowRoles?: string;
    allowUserIds?: string;
    createdAt?: string;
    customCheckSql?: string;
    idWorkflow: string;
    idWorkflowStep: string;
    messageBefore?: string;
    ruleJson?: string;
    statusFrom: string;
    statusRejectTo?: number;
    statusTo: string;
    total?: number;
    triggerJson?: string;
    updatedAt?: string;
    urutan: number;
}
