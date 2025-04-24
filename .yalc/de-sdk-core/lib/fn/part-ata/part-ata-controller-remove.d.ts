import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaDto } from '../../models/amims-part-ata-dto';
export interface PartAtaControllerRemove$Params {
    id: string;
}
export declare function partAtaControllerRemove(http: HttpClient, rootUrl: string, params: PartAtaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAtaDto;
}>>;
export declare namespace partAtaControllerRemove {
    var PATH: string;
}
