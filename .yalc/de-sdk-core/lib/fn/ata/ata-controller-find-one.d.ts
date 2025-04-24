import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAtaDto } from '../../models/amims-ata-dto';
export interface AtaControllerFindOne$Params {
    id: string;
}
export declare function ataControllerFindOne(http: HttpClient, rootUrl: string, params: AtaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAtaDto;
}>>;
export declare namespace ataControllerFindOne {
    var PATH: string;
}
