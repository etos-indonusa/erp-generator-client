import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsEngineerPmtrItemReportDto {
    createdAt?: string;
    figureIndex?: string;
    idEngineerPmtr?: string;
    idEngineerPmtrItem: string;
    idMpart?: string;
    mpart: AmimsMpartDto;
    noteItemPmtr?: string;
    priority?: string;
    qtyPmtr?: number;
    updatedAt?: string;
}
