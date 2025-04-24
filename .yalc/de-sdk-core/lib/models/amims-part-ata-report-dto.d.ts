import { AmimsAtaDto } from '../models/amims-ata-dto';
import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPartAtaReportDto {
    ata: AmimsAtaDto;
    figure?: string;
    idAta?: string;
    idMpart?: string;
    idPartAta: string;
    item?: string;
    mpart: AmimsMpartDto;
}
