import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../../models/amims-engineer-rti-part-dto';
export interface EngineerRtiPartControllerCreate$Params {
    body: AmimsEngineerRtiPartDto;
}
export declare function engineerRtiPartControllerCreate(http: HttpClient, rootUrl: string, params: EngineerRtiPartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiPartDto;
}>>;
export declare namespace engineerRtiPartControllerCreate {
    var PATH: string;
}
