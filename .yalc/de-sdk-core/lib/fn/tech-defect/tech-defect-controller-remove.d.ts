import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectDto } from '../../models/amims-tech-defect-dto';
export interface TechDefectControllerRemove$Params {
    id: string;
}
export declare function techDefectControllerRemove(http: HttpClient, rootUrl: string, params: TechDefectControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDefectDto;
}>>;
export declare namespace techDefectControllerRemove {
    var PATH: string;
}
