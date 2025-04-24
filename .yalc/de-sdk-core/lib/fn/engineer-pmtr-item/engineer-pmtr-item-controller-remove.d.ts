import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../../models/amims-engineer-pmtr-item-dto';
export interface EngineerPmtrItemControllerRemove$Params {
    id: string;
}
export declare function engineerPmtrItemControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPmtrItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrItemDto;
}>>;
export declare namespace engineerPmtrItemControllerRemove {
    var PATH: string;
}
