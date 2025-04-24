import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsMpcPiroItemReportDto {
    createdAt?: string;
    forFigureIndex?: string;
    idMpart?: string;
    idMpcPiro?: string;
    idMpcPiroItem: string;
    isDeleted?: number;
    mpart: AmimsMpartDto;
    noteItemPiro?: string;
    priority?: string;
    qtyPiro?: number;
    statusItem?: string;
    updatedAt?: string;
}
