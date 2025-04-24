import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionDto } from '../../models/amims-part-condition-dto';
export interface PartConditionControllerRemove$Params {
    id: string;
}
export declare function partConditionControllerRemove(http: HttpClient, rootUrl: string, params: PartConditionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartConditionDto;
}>>;
export declare namespace partConditionControllerRemove {
    var PATH: string;
}
