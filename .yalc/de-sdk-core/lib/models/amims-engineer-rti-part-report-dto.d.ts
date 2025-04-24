import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsEngineerRtiPartReportDto {
    dateInstall?: string;
    idEngineerRti?: string;
    idEngineerRtiPart: string;
    idPart?: string;
    idPartInstall?: string;
    parent?: string;
    part: AmimsPartDto;
    tsiCycle?: number;
    tsiHours?: number;
    tsiVal?: number;
    tsiVar?: string;
    tsnCycle?: number;
    tsnHours?: number;
    tsnVal?: number;
    tsnVar?: string;
    tsoCycle?: number;
    tsoHours?: number;
    tsoVal?: number;
    tsoVar?: string;
    warantyStartCycle?: number;
    warantyStartDate?: string;
    warantyStartDays?: number;
    warantyStartHours?: number;
}
