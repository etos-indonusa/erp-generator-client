import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../../models/amims-engineer-pris-return-dto';
export interface EngineerPrisReturnControllerRemove$Params {
    id: string;
}
export declare function engineerPrisReturnControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPrisReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnDto;
}>>;
export declare namespace engineerPrisReturnControllerRemove {
    var PATH: string;
}
