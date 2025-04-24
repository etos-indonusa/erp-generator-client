export interface BaseQueryDtoSmart {
    /**
     * Where filter (supports >, >=, <, <=, like, notLike,  in, notIn, isNull, isNotNull)
     */
    filter?: {
        [key: string]: any;
    };
    /**
     * Nama tabel beserta tipenya single atau array
     */
    include?: Array<any>;
    /**
     * Filter + jenis JOIN (inner/left/right)
     */
    joinWhere?: Array<any>;
    /**
     * Pagination page index
     */
    pageIndex?: number;
    /**
     * Pagination limit per page
     */
    pageSize?: number;
    /**
     * Fields to search with search_keyword
     */
    search_field?: Array<string>;
    /**
     * Search keyword
     */
    search_keyword?: string;
    /**
     * Sort by field
     */
    sortKey?: string;
    /**
     * Sort direction (asc or desc)
     */
    sortValue?: string;
}
