import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
export interface AmimsTdDetailAcReportDto {
    aircraft: AmimsAircraftDto;
    complianceC?: number;
    complianceD?: string;
    complianceH?: number;
    compliteC?: number;
    compliteD?: string;
    compliteH?: number;
    compliteUser?: string;
    engineer?: string;
    idAircraft?: string;
    idTdDetail?: string;
    idTdDetailAc: string;
    idTechLog?: string;
    isActive?: string;
    noteClose?: string;
    noteDetail?: string;
    updatedAt?: string;
}
