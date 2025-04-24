export const AmimsPartInstallOldReportFormSchema = {
    "aircraft": {
        "default": "",
        "required": true
    },
    "bin": {
        "default": "",
        "required": false
    },
    "createdAt": {
        "default": "",
        "required": false
    },
    "dateInstall": {
        "default": "",
        "required": false
    },
    "dueOverhaulC": {
        "default": 0,
        "required": false
    },
    "dueOverhaulH": {
        "default": 0,
        "required": false
    },
    "dueOverhaulValue": {
        "default": 0,
        "required": false
    },
    "figureIndex": {
        "default": "",
        "required": false
    },
    "idAircraft": {
        "required": false
    },
    "idEngineerPrisItem": {
        "required": false
    },
    "idPart": {
        "required": false
    },
    "idPartInstall": {
        "required": false
    },
    "idPartInstallOld": {
        "required": true
    },
    "installedInspectionC": {
        "default": 0,
        "required": false
    },
    "installedInspectionH": {
        "default": 0,
        "required": false
    },
    "installedInspectionValue": {
        "default": 0,
        "required": false
    },
    "installedOverhaulC": {
        "default": 0,
        "required": false
    },
    "installedOverhaulH": {
        "default": 0,
        "required": false
    },
    "installedOverhaulValue": {
        "default": 0,
        "required": false
    },
    "isfeatured": {
        "default": "",
        "required": false
    },
    "itemIndex": {
        "default": "",
        "required": false
    },
    "oldId": {
        "default": "",
        "required": false
    },
    "parent": {
        "default": "",
        "required": false
    },
    "part": {
        "default": "",
        "required": true
    },
    "qtyInstall": {
        "default": 0,
        "required": false
    },
    "statusInstall": {
        "default": "",
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1pbXMtcGFydC1pbnN0YWxsLW9sZC1yZXBvcnQuZm9ybS1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZGtjb3JlL3NyYy9saWIvZm9ybS1zY2hlbWEvYW1pbXMtcGFydC1pbnN0YWxsLW9sZC1yZXBvcnQuZm9ybS1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sbUNBQW1DLEdBQUc7SUFDakQsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDdEIsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCwwQkFBMEIsRUFBRTtRQUMxQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCx3QkFBd0IsRUFBRTtRQUN4QixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFtaW1zUGFydEluc3RhbGxPbGRSZXBvcnRGb3JtU2NoZW1hID0ge1xuICBcImFpcmNyYWZ0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJiaW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJjcmVhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJkYXRlSW5zdGFsbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImR1ZU92ZXJoYXVsQ1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImR1ZU92ZXJoYXVsSFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImR1ZU92ZXJoYXVsVmFsdWVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmaWd1cmVJbmRleFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImlkQWlyY3JhZnRcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZEVuZ2luZWVyUHJpc0l0ZW1cIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFBhcnRcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFBhcnRJbnN0YWxsXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRQYXJ0SW5zdGFsbE9sZFwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaW5zdGFsbGVkSW5zcGVjdGlvbkNcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpbnN0YWxsZWRJbnNwZWN0aW9uSFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImluc3RhbGxlZEluc3BlY3Rpb25WYWx1ZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImluc3RhbGxlZE92ZXJoYXVsQ1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImluc3RhbGxlZE92ZXJoYXVsSFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImluc3RhbGxlZE92ZXJoYXVsVmFsdWVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpc2ZlYXR1cmVkXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaXRlbUluZGV4XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwib2xkSWRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJwYXJlbnRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJwYXJ0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJxdHlJbnN0YWxsXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzSW5zdGFsbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInVwZGF0ZWRBdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9XG59O1xuIl19