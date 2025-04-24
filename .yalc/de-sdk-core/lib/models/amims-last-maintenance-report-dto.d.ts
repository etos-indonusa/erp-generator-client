import { AmimsMaintenanceDto } from '../models/amims-maintenance-dto';
import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsLastMaintenanceReportDto {
    createdAt?: string;
    idLastMaintenance: string;
    idMaintenance?: string;
    idMpcJo?: string;
    idPart?: string;
    idUser?: string;
    lastCycle?: number;
    lastDate?: string;
    lastHours?: number;
    maintenance: AmimsMaintenanceDto;
    oldId?: string;
    parentCycle?: number;
    parentHours?: number;
    part: AmimsPartDto;
    typeOfWork?: number;
    updatedAt?: string;
}
