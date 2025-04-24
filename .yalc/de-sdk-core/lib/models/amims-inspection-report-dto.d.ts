import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsInspectionReportDto {
    aircraft: AmimsAircraftDto;
    atachapter?: string;
    createdAt?: string;
    cycleTo?: number;
    flightHoursTo?: number;
    idAircraft?: string;
    idInspection: string;
    idMaintenanceCode?: string;
    idPart?: string;
    idUser?: string;
    noteInspection?: string;
    oldId?: string;
    part: AmimsPartDto;
    repetitions?: number;
    timeRangeTo?: number;
    timeUnit?: string;
    updatedAt?: string;
}
