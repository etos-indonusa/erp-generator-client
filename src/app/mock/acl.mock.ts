export interface Permission {
    can_list: boolean;
    can_add: boolean;
    can_edit: boolean;
    can_delete: boolean;
}

export interface MockAcl {
    id_group: string;
    permissions: {
        [moduleName: string]: Permission;
    };
}

export const mockAcl: MockAcl = {
    id_group: 'operator',
    permissions: {
        client: {
            can_list: true,
            can_add: true,
            can_edit: false,
            can_delete: false
        },
        invoice: {
            can_list: true,
            can_add: false,
            can_edit: false,
            can_delete: false
        }
    }
};
