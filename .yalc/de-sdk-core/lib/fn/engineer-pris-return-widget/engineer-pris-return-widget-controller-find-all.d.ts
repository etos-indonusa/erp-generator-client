import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnWidgetDto } from '../../models/amims-engineer-pris-return-widget-dto';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { SelectFieldDto } from '../../models/select-field-dto';
export interface EngineerPrisReturnWidgetControllerFindAll$Params {
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
export declare function engineerPrisReturnWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPrisReturnWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReturnWidgetDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReturnWidgetControllerFindAll {
    var PATH: string;
}
