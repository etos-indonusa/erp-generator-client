import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibReferenceDto } from '../../models/amims-lib-reference-dto';
export interface LibReferenceControllerUpdate$Params {
    id: string;
    body: AmimsLibReferenceDto;
}
export declare function libReferenceControllerUpdate(http: HttpClient, rootUrl: string, params: LibReferenceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibReferenceDto;
}>>;
export declare namespace libReferenceControllerUpdate {
    var PATH: string;
}
