import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Main',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/dashboard'
    },
    {
        label: 'IN Apps',
        isTitle: true
    }
    ,{
        label: 'Currency',
        icon: 'message-square',
        link: '/app/amims/currency',
    },

    // Inventory
    {
        label: 'Inventory',
        isTitle: true
    },
    {
        label: 'part',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part',
    },
    
    {
        label: 'part-install',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-install',
    },
    {
        label: 'part-figure-index',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-figure-index',
    },
    {
        label: 'part-condition',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-condition',
    },
    {
        label: 'part-category',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-category',
    },
    {
        label: 'part-ata',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-ata',
    },
    {
        label: 'part-actype',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-actype',
    },
    
    {
        label: 'part-alternative',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/part-alternative',
    },
    {
        label: 'mpart',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/mpart',
    },
    {
        label: 'bin',
        icon: 'message-square',
        link: '/app/amims/amims-inventory/bin',
    }

    //Master

    , {
        label: 'Master',
        isTitle: true
    }
    , {
        label: 'ata',
        icon: 'message-square',
        link: '/app/amims/amims-master/ata',
    }

    , {
        label: 'company',
        icon: 'message-square',
        link: '/app/amims/amims-master/company',
    }
    , {
        label: 'doctype',
        icon: 'message-square',
        link: '/app/amims/amims-master/doctype',
    }
    , {
        label: 'lib-form-issued',
        icon: 'message-square',
        link: '/app/amims/amims-master/lib-form-issued',
    }
    , {
        label: 'lib-reference',
        icon: 'message-square',
        link: '/app/amims/amims-master/lib-reference',
    }
    // , {
    //     label: 'lib-upload',
    //     icon: 'message-square',
    //     link: '/app/amims/amims-master/lib-upload',
    // }
    , {
        label: 'life-time-limit',
        icon: 'message-square',
        link: '/app/amims/amims-master/life-time-limit',
    }
    , {
        label: 'location-flight',
        icon: 'message-square',
        link: '/app/amims/amims-master/location-flight',
    }
    , {
        label: 'mel',
        icon: 'message-square',
        link: '/app/amims/amims-master/mel',
    }

    , {
        label: 'partid',
        icon: 'message-square',
        link: '/app/amims/amims-master/partid',
    }
    , {
        label: 'pilot',
        icon: 'message-square',
        link: '/app/amims/amims-master/pilot',
    }
    , {
        label: 'position',
        icon: 'message-square',
        link: '/app/amims/amims-master/position',
    }
    , {
        label: 'shipping',
        icon: 'message-square',
        link: '/app/amims/amims-master/shipping',
    }
    , {
        label: 'type-ofwork',
        icon: 'message-square',
        link: '/app/amims/amims-master/type-ofwork',
    }
    , {
        label: 'warranty',
        icon: 'message-square',
        link: '/app/amims/amims-master/warranty',
    },

    // Maintenance
    {
        label: 'Maintenance',
        isTitle: true
    }
    , {
        label: 'actype',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/actype',
    }
    , {
        label: 'aircraft',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/aircraft',
    }
    , {
        label: 'aircraft-detail',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/aircraft-detail',
    }
    , {
        label: 'condition-monitoring',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/condition-monitoring',
    }
    , {
        label: 'due-list',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/due-list',
    }
    , {
        label: 'due-list-output',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/due-list-output',
    }
    , {
        label: 'engineer-rti',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/engineer-rti',
    }
    , {
        label: 'engineer-rti-identify',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/engineer-rti-identify',
    }
    , {
        label: 'engineer-rti-part',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/engineer-rti-part',
    }
    , {
        label: 'inspection',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/inspection',
    }
    , {
        label: 'last-maintenance',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/last-maintenance',
    }
    , {
        label: 'log-process',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/log-process',
    }
    , {
        label: 'log-sp',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/log-sp',
    }
    , {
        label: 'log-transfer',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/log-transfer',
    }
    , {
        label: 'log-tsn-tso',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/log-tsn-tso',
    }
    , {
        label: 'log-user',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/log-user',
    }
    , {
        label: 'maintenance',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/maintenance',
    }
    , {
        label: 'maintenance-code',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/maintenance-code',
    }
    , {
        label: 'maintenance-code-form-issued',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/maintenance-code-form-issued',
    }
    , {
        label: 'maintenance-code-reference',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/maintenance-code-reference',
    }
    , {
        label: 'rotary-factor',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/rotary-factor',
    }
    , {
        label: 'tech-defect',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-defect',
    }
    , {
        label: 'tech-discrepancies',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-discrepancies',
    }
    , {
        label: 'tech-log',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-log',
    }
    , {
        label: 'tech-log-engine',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-log-engine',
    }
    , {
        label: 'tech-log-engine-check',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-log-engine-check',
    }
    , {
        label: 'tech-log-item',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-log-item',
    }
    , {
        label: 'tech-log-jo',
        icon: 'message-square',
        link: '/app/amims/amims-maintenance/tech-log-jo',
    },

    // DOCUMENT 
    {
        label: 'Document',
        isTitle: true
    }
    , {
        label: 'internal-grn',
        icon: 'message-square',
        link: '/app/amims/amims-erp/internal-grn',
    }
    , {
        label: 'internal-grn-item',
        icon: 'message-square',
        link: '/app/amims/amims-erp/internal-grn-item',
    }
    , {
        label: 'currency',
        icon: 'message-square',
        link: '/app/amims/amims-erp/currency',
    }
    , {
        label: 'engineer-pmtr',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pmtr',
    }
    , {
        label: 'engineer-pmtr-item',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pmtr-item',
    }
    , {
        label: 'engineer-pris',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pris',
    }
    , {
        label: 'engineer-pris-item',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pris-item',
    }
    , {
        label: 'engineer-pris-return',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pris-return',
    }
    , {
        label: 'engineer-pris-return-item',
        icon: 'message-square',
        link: '/app/amims/amims-erp/engineer-pris-return-item',
    }
    , {
        label: 'mpc-gse',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-gse',
    }
    , {
        label: 'mpc-jo',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-jo',
    }
    , {
        label: 'mpc-jo-operator',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-jo-operator',
    }
    , {
        label: 'mpc-piro',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-piro',
    }
    , {
        label: 'mpc-piro-item',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-piro-item',
    }
    , {
        label: 'mpc-self-maintenance',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-self-maintenance',
    }
    , {
        label: 'mpc-wp',
        icon: 'message-square',
        link: '/app/amims/amims-erp/mpc-wp',
    }
    , {
        label: 'qa-rpd',
        icon: 'message-square',
        link: '/app/amims/amims-erp/qa-rpd',
    },

    {
        label: 'Administrator',
        isTitle: true
    }
    , {
        label: 'Users',
        icon: 'message-square',
        link: '/app/acl/users',
    }, {
        label: 'UserGroup',
        icon: 'message-square',
        link: '/app/acl/user-group',
    }, {
        label: 'Module',
        icon: 'message-square',
        link: '/app/acl/module',
    }
    , {
        label: 'Penomoran Document',
        icon: 'message-square',
        link: '/app/tools/document-numbering-counter',
    },
    {
        label: 'Web Apps',
        isTitle: true
    },
    {
        label: 'Email',
        icon: 'mail',
        subItems: [
            {
                label: 'Inbox',
                link: '/apps/email/inbox',
            },
            {
                label: 'Read',
                link: '/apps/email/read'
            },
            {
                label: 'Compose',
                link: '/apps/email/compose'
            },
        ]
    },
    {
        label: 'Chat',
        icon: 'message-square',
        link: '/apps/chat',
    },
    {
        label: 'Calendar',
        icon: 'calendar',
        link: '/apps/calendar',
        badge: {
            variant: 'primary',
            text: 'Event',
        }
    },
    {
        label: 'Components',
        isTitle: true
    },
    {
        label: 'UI Kit',
        icon: 'feather',
        subItems: [
            {
                label: 'Accordion',
                link: '/ui-components/accordion',
            },
            {
                label: 'Alerts',
                link: '/ui-components/alerts',
            },
            {
                label: 'Badges',
                link: '/ui-components/badges',
            },
            {
                label: 'Breadcrumbs',
                link: '/ui-components/breadcrumbs',
            },
            {
                label: 'Buttons',
                link: '/ui-components/buttons',
            },
            {
                label: 'Button group',
                link: '/ui-components/button-group',
            },
            {
                label: 'Cards',
                link: '/ui-components/cards',
            },
            {
                label: 'Carousel',
                link: '/ui-components/carousel',
            },
            {
                label: 'Collapse',
                link: '/ui-components/collapse',
            },
            {
                label: 'Datepicker',
                link: '/ui-components/datepicker',
            },
            {
                label: 'Dropdowns',
                link: '/ui-components/dropdowns',
            },
            {
                label: 'List group',
                link: '/ui-components/list-group',
            },
            {
                label: 'Media object',
                link: '/ui-components/media-object',
            },
            {
                label: 'Modal',
                link: '/ui-components/modal',
            },
            {
                label: 'Navs',
                link: '/ui-components/navs',
            },
            {
                label: 'Offcanvas',
                link: '/ui-components/offcanvas',
            },
            {
                label: 'Pagination',
                link: '/ui-components/pagination',
            },
            {
                label: 'Popovers',
                link: '/ui-components/popovers',
            },
            {
                label: 'Progress',
                link: '/ui-components/progress',
            },
            {
                label: 'Rating',
                link: '/ui-components/rating',
            },
            {
                label: 'Scrollbar',
                link: '/ui-components/scrollbar',
            },
            {
                label: 'Spinners',
                link: '/ui-components/spinners',
            },
            {
                label: 'Table',
                link: '/ui-components/table',
            },
            {
                label: 'Timepicker',
                link: '/ui-components/timepicker',
            },
            {
                label: 'Tooltips',
                link: '/ui-components/tooltips',
            },
            {
                label: 'Typeadhed',
                link: '/ui-components/typeahead',
            },
        ]
    },
    {
        label: 'Advanced UI',
        icon: 'anchor',
        subItems: [
            {
                label: 'Cropper',
                link: '/advanced-ui/cropper',
            },
            {
                label: 'Owl carousel',
                link: '/advanced-ui/owl-carousel',
            },
            {
                label: 'SortableJs',
                link: '/advanced-ui/sortablejs',
            },
            {
                label: 'Sweet alert',
                link: '/advanced-ui/sweet-alert',
            },
        ]
    },
    {
        label: 'Forms',
        icon: 'file-text',
        subItems: [
            {
                label: 'Basic elements',
                link: '/forms/basic-elements'
            },
            {
                label: 'Advanced elements',
                subItems: [
                    {
                        label: 'Ngx-custom-validators',
                        link: '/forms/advanced/ngx-custom-validators'
                    },
                    {
                        label: 'Ngx-mask',
                        link: '/forms/advanced/ngx-mask'
                    },
                    {
                        label: 'Ng-select',
                        link: '/forms/advanced/ng-select'
                    },
                    {
                        label: 'Ngx-chips',
                        link: '/forms/advanced/ngx-chips'
                    },
                    {
                        label: 'Ngx-color-picker',
                        link: '/forms/advanced/ngx-color-picker'
                    },
                    {
                        label: 'Ngx-dropzone',
                        link: '/forms/advanced/ngx-dropzone-wrapper'
                    },
                ]
            },
            {
                label: 'Editors',
                link: '/forms/editors'
            },
            {
                label: 'Wizard',
                link: '/forms/wizard'
            },
        ]
    },
    {
        label: 'Charts',
        icon: 'pie-chart',
        subItems: [
            {
                label: 'ApexCharts',
                link: '/charts/apexcharts',
            },
            {
                label: 'ChartJs',
                link: '/charts/chartjs',
            },
        ]
    },
    {
        label: 'Tables',
        icon: 'layout',
        subItems: [
            {
                label: 'Basic tables',
                link: '/tables/basic-tables',
            },
            {
                label: 'Ngx-datatable',
                link: '/tables/ngx-datatable'
            }
        ]
    },
    {
        label: 'Icons',
        icon: 'smile',
        subItems: [
            {
                label: 'Feather icons',
                link: '/icons/feather-icons',
            },
        ]
    },
    {
        label: 'Pages',
        isTitle: true
    },
    {
        label: 'Special pages',
        icon: 'book',
        subItems: [
            {
                label: 'Blank page',
                link: '/general/blank-page',
            },
            {
                label: 'Faq',
                link: '/general/faq',
            },
            {
                label: 'Invoice',
                link: '/general/invoice',
            },
            {
                label: 'Profile',
                link: '/general/profile',
            },
            {
                label: 'Pricing',
                link: '/general/pricing',
            },
            {
                label: 'Timeline',
                link: '/general/timeline',
            }
        ]
    },
    {
        label: 'Authentication',
        icon: 'unlock',
        subItems: [
            {
                label: 'Login',
                link: '/auth/login',
            },
            {
                label: 'Register',
                link: '/auth/register',
            },
        ]
    },
    {
        label: 'Error',
        icon: 'cloud-off',
        subItems: [
            {
                label: '404',
                link: '/error/404',
            },
            {
                label: '500',
                link: '/error/500',
            },
        ]
    },
];
