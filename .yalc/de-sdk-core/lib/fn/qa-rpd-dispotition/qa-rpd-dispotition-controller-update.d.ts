import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../../models/amims-qa-rpd-dispotition-dto';
export interface QaRpdDispotitionControllerUpdate$Params {
    id: string;
    body: AmimsQaRpdDispotitionDto;
}
export declare function qaRpdDispotitionControllerUpdate(http: HttpClient, rootUrl: string, params: QaRpdDispotitionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDispotitionDto;
}>>;
export declare namespace qaRpdDispotitionControllerUpdate {
    var PATH: string;
}
