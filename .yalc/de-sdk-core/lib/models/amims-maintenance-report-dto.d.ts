import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsMaintenanceReportDto {
    atachapter?: string;
    createdAt?: string;
    cycleFrom?: number;
    cycleTo?: number;
    flightHoursFrom?: number;
    flightHoursTo?: number;
    idMaintenance: string;
    idMaintenanceCode?: string;
    idMpart?: string;
    idUser?: string;
    mpart: AmimsMpartDto;
    noteMaintenance?: string;
    oldId?: string;
    onLocation?: string;
    repetitions?: number;
    timeRangeForm?: number;
    timeRangeTo?: number;
    timeUnit?: string;
    typeMaintenance?: string;
    updatedAt?: string;
}
