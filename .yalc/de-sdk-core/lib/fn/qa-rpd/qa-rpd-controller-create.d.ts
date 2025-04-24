import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDto } from '../../models/amims-qa-rpd-dto';
export interface QaRpdControllerCreate$Params {
    body: AmimsQaRpdDto;
}
export declare function qaRpdControllerCreate(http: HttpClient, rootUrl: string, params: QaRpdControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDto;
}>>;
export declare namespace qaRpdControllerCreate {
    var PATH: string;
}
