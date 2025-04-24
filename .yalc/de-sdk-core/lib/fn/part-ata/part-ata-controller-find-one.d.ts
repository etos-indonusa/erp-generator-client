import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaDto } from '../../models/amims-part-ata-dto';
export interface PartAtaControllerFindOne$Params {
    id: string;
}
export declare function partAtaControllerFindOne(http: HttpClient, rootUrl: string, params: PartAtaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAtaDto;
}>>;
export declare namespace partAtaControllerFindOne {
    var PATH: string;
}
