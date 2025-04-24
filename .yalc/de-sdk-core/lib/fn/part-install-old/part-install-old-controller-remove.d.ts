import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldDto } from '../../models/amims-part-install-old-dto';
export interface PartInstallOldControllerRemove$Params {
    id: string;
}
export declare function partInstallOldControllerRemove(http: HttpClient, rootUrl: string, params: PartInstallOldControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallOldDto;
}>>;
export declare namespace partInstallOldControllerRemove {
    var PATH: string;
}
