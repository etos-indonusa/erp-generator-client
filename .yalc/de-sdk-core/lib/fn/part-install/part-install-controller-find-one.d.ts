import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallDto } from '../../models/amims-part-install-dto';
export interface PartInstallControllerFindOne$Params {
    id: string;
}
export declare function partInstallControllerFindOne(http: HttpClient, rootUrl: string, params: PartInstallControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallDto;
}>>;
export declare namespace partInstallControllerFindOne {
    var PATH: string;
}
