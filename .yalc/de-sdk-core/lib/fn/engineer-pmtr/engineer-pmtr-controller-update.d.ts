import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrDto } from '../../models/amims-engineer-pmtr-dto';
export interface EngineerPmtrControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPmtrDto;
}
export declare function engineerPmtrControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPmtrControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrDto;
}>>;
export declare namespace engineerPmtrControllerUpdate {
    var PATH: string;
}
