import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../../models/amims-engineer-pris-return-dto';
export interface EngineerPrisReturnControllerCreate$Params {
    body: AmimsEngineerPrisReturnDto;
}
export declare function engineerPrisReturnControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPrisReturnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnDto;
}>>;
export declare namespace engineerPrisReturnControllerCreate {
    var PATH: string;
}
