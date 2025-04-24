import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAtaDto } from '../../models/amims-ata-dto';
export interface AtaControllerUpdate$Params {
    id: string;
    body: AmimsAtaDto;
}
export declare function ataControllerUpdate(http: HttpClient, rootUrl: string, params: AtaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAtaDto;
}>>;
export declare namespace ataControllerUpdate {
    var PATH: string;
}
