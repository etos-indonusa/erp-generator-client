import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDto } from '../../models/amims-qa-rpd-dto';
export interface QaRpdControllerUpdate$Params {
    id: string;
    body: AmimsQaRpdDto;
}
export declare function qaRpdControllerUpdate(http: HttpClient, rootUrl: string, params: QaRpdControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDto;
}>>;
export declare namespace qaRpdControllerUpdate {
    var PATH: string;
}
