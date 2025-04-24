import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaDto } from '../../models/amims-part-ata-dto';
export interface PartAtaControllerUpdate$Params {
    id: string;
    body: AmimsPartAtaDto;
}
export declare function partAtaControllerUpdate(http: HttpClient, rootUrl: string, params: PartAtaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAtaDto;
}>>;
export declare namespace partAtaControllerUpdate {
    var PATH: string;
}
