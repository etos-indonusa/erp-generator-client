import { AmimsActypeDto } from '../models/amims-actype-dto';
import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPartActypeReportDto {
    actype: AmimsActypeDto;
    createdAt?: string;
    idActype?: string;
    idActypeOld?: string;
    idMpart?: string;
    idPartActype: string;
    mpart: AmimsMpartDto;
    updatedAt?: string;
}
