import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibReferenceDto } from '../../models/amims-lib-reference-dto';
export interface LibReferenceControllerCreate$Params {
    body: AmimsLibReferenceDto;
}
export declare function libReferenceControllerCreate(http: HttpClient, rootUrl: string, params: LibReferenceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibReferenceDto;
}>>;
export declare namespace libReferenceControllerCreate {
    var PATH: string;
}
