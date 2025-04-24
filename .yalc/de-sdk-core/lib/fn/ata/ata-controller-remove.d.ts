import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAtaDto } from '../../models/amims-ata-dto';
export interface AtaControllerRemove$Params {
    id: string;
}
export declare function ataControllerRemove(http: HttpClient, rootUrl: string, params: AtaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAtaDto;
}>>;
export declare namespace ataControllerRemove {
    var PATH: string;
}
