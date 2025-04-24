import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrDto } from '../../models/amims-engineer-pmtr-dto';
export interface EngineerPmtrControllerRemove$Params {
    id: string;
}
export declare function engineerPmtrControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPmtrControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrDto;
}>>;
export declare namespace engineerPmtrControllerRemove {
    var PATH: string;
}
