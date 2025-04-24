import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsLogTsnTsoReportDto {
    batasId?: string;
    createdAt?: string;
    cycle?: number;
    hours?: number;
    idLogTsnTso: string;
    idPart?: string;
    idTechLog?: string;
    part: AmimsPartDto;
    tsnC?: number;
    tsnH?: number;
    tsoC?: number;
    tsoH?: number;
}
