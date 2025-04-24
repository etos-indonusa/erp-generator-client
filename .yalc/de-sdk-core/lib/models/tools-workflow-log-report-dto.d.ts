import { ToolsWorkflowDto } from '../models/tools-workflow-dto';
export interface ToolsWorkflowLogReportDto {
    approvedAt?: string;
    approvedBy?: string;
    catatan?: string;
    forModule: string;
    fromModuleId: string;
    idUsers: string;
    idWorkflow?: string;
    idWorkflowLog: string;
    idWorkflowStep: string;
    namaUser?: string;
    statusAfter?: string;
    statusBefore?: string;
    workflow: ToolsWorkflowDto;
}
