import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionDto } from '../../models/amims-part-condition-dto';
export interface PartConditionControllerUpdate$Params {
    id: string;
    body: AmimsPartConditionDto;
}
export declare function partConditionControllerUpdate(http: HttpClient, rootUrl: string, params: PartConditionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartConditionDto;
}>>;
export declare namespace partConditionControllerUpdate {
    var PATH: string;
}
