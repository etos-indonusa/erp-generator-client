import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
export interface AmimsEngineerPmtrReportDto {
    aircraft: AmimsAircraftDto;
    createdAt?: string;
    dateAcc?: string;
    datePmtr?: string;
    fromSite?: number;
    idAircraft?: string;
    idEngineerPmtr: string;
    idUser?: string;
    idUserAcc?: string;
    isDeleted?: number;
    noIndex?: number;
    notePmtr?: string;
    numberPmtr?: string;
    statusPmtr?: string;
    toSite?: number;
    updatedAt?: string;
    validasi?: number;
}
