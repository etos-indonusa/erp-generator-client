import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../../models/amims-engineer-rti-part-dto';
export interface EngineerRtiPartControllerUpdate$Params {
    id: string;
    body: AmimsEngineerRtiPartDto;
}
export declare function engineerRtiPartControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerRtiPartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiPartDto;
}>>;
export declare namespace engineerRtiPartControllerUpdate {
    var PATH: string;
}
