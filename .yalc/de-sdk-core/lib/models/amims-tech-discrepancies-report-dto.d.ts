import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsTechDiscrepanciesReportDto {
    createdAt?: string;
    dateDiscrepancies?: string;
    idPart?: string;
    idTechDiscrepancies: string;
    idTechLog?: string;
    isDiscrepancies?: string;
    noteDiscrepancies?: string;
    part: AmimsPartDto;
    updatedAt?: string;
}
