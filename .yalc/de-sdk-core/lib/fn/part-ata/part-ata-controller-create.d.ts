import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaDto } from '../../models/amims-part-ata-dto';
export interface PartAtaControllerCreate$Params {
    body: AmimsPartAtaDto;
}
export declare function partAtaControllerCreate(http: HttpClient, rootUrl: string, params: PartAtaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAtaDto;
}>>;
export declare namespace partAtaControllerCreate {
    var PATH: string;
}
