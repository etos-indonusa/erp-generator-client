import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsTechLogJoReportDto {
    createdAt?: string;
    dateClose?: string;
    idMpcJo?: string;
    idPart?: string;
    idTechLog?: string;
    idTechLogClose?: string;
    idTechLogJo: string;
    isContinue?: string;
    part: AmimsPartDto;
    timeClose?: string;
    updatedAt?: string;
}
