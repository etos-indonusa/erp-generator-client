import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsMpcSelfMaintenanceReportDto {
    createdAt?: string;
    dateAccQa?: string;
    dateMaintenance?: string;
    doc?: string;
    idEngineerRti?: string;
    idMpcSelfMaintenance: string;
    idSite?: string;
    idUserMaintenance?: string;
    idUserQa?: string;
    numberMaintenance?: string;
    reportMaintenance?: string;
    site: AmimsSiteDto;
    statusMaintenance?: string;
    typeMaintenance?: string;
    updatedAt?: string;
}
