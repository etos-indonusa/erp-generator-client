import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldDto } from '../../models/amims-part-install-old-dto';
export interface PartInstallOldControllerFindOne$Params {
    id: string;
}
export declare function partInstallOldControllerFindOne(http: HttpClient, rootUrl: string, params: PartInstallOldControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallOldDto;
}>>;
export declare namespace partInstallOldControllerFindOne {
    var PATH: string;
}
