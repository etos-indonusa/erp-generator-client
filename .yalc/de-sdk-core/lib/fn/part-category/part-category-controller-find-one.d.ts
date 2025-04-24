import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryDto } from '../../models/amims-part-category-dto';
export interface PartCategoryControllerFindOne$Params {
    id: string;
}
export declare function partCategoryControllerFindOne(http: HttpClient, rootUrl: string, params: PartCategoryControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartCategoryDto;
}>>;
export declare namespace partCategoryControllerFindOne {
    var PATH: string;
}
