import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectDto } from '../../models/amims-tech-defect-dto';
export interface TechDefectControllerUpdate$Params {
    id: string;
    body: AmimsTechDefectDto;
}
export declare function techDefectControllerUpdate(http: HttpClient, rootUrl: string, params: TechDefectControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDefectDto;
}>>;
export declare namespace techDefectControllerUpdate {
    var PATH: string;
}
