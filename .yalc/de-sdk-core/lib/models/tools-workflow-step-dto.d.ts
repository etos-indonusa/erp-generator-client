export interface ToolsWorkflowStepDto {
    allowRoles?: string;
    allowUserIds?: string;
    createdAt?: string;
    customCheckSql?: string;
    idWorkflow: string;
    idWorkflowStep: string;
    messageBefore?: string;
    ruleJson?: string;
    statusFrom: string;
    statusRejectTo?: string;
    statusTo: string;
    triggerJson?: string;
    updatedAt?: string;
    urutan: number;
}
