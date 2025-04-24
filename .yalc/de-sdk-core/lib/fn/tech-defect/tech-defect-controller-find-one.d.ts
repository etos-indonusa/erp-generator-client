import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectDto } from '../../models/amims-tech-defect-dto';
export interface TechDefectControllerFindOne$Params {
    id: string;
}
export declare function techDefectControllerFindOne(http: HttpClient, rootUrl: string, params: TechDefectControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDefectDto;
}>>;
export declare namespace techDefectControllerFindOne {
    var PATH: string;
}
