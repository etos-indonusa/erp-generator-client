import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdWidgetDto } from '../../models/amims-qa-rpd-widget-dto';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { SelectFieldDto } from '../../models/select-field-dto';
export interface QaRpdWidgetControllerFindAll$Params {
    /**
     * Filter object
     */
    filter?: Object;
    /**
     * JoinWhere object
     */
    joinWhere?: Object;
    /**
     * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
     */
    select?: Array<SelectFieldDto>;
    /**
     * Fields to group by
     */
    groupBy?: Array<string>;
    sortKey?: string;
    sortValue?: 'ASC' | 'DESC';
    body: BaseWidgetQueryDto;
}
export declare function qaRpdWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: QaRpdWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaRpdWidgetDto>;
    'total'?: number;
}>>;
export declare namespace qaRpdWidgetControllerFindAll {
    var PATH: string;
}
