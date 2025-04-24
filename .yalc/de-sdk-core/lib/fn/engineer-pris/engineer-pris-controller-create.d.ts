import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisDto } from '../../models/amims-engineer-pris-dto';
export interface EngineerPrisControllerCreate$Params {
    body: AmimsEngineerPrisDto;
}
export declare function engineerPrisControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPrisControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisDto;
}>>;
export declare namespace engineerPrisControllerCreate {
    var PATH: string;
}
