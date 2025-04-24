import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../../models/amims-qa-rpd-dispotition-dto';
export interface QaRpdDispotitionControllerCreate$Params {
    body: AmimsQaRpdDispotitionDto;
}
export declare function qaRpdDispotitionControllerCreate(http: HttpClient, rootUrl: string, params: QaRpdDispotitionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDispotitionDto;
}>>;
export declare namespace qaRpdDispotitionControllerCreate {
    var PATH: string;
}
