import { AmimsAtaDto } from '../models/amims-ata-dto';
import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPartFigureIndexReportDto {
    ata: AmimsAtaDto;
    createdAt?: string;
    figureIndex?: string;
    idAta?: string;
    idMpart?: string;
    idPartFigureIndex: string;
    itemIndex?: string;
    mpart: AmimsMpartDto;
    updatedAt?: string;
}
