import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrDto } from '../../models/amims-engineer-pmtr-dto';
export interface EngineerPmtrControllerCreate$Params {
    body: AmimsEngineerPmtrDto;
}
export declare function engineerPmtrControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPmtrControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrDto;
}>>;
export declare namespace engineerPmtrControllerCreate {
    var PATH: string;
}
