import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAtaDto } from '../../models/amims-ata-dto';
export interface AtaControllerCreate$Params {
    body: AmimsAtaDto;
}
export declare function ataControllerCreate(http: HttpClient, rootUrl: string, params: AtaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAtaDto;
}>>;
export declare namespace ataControllerCreate {
    var PATH: string;
}
