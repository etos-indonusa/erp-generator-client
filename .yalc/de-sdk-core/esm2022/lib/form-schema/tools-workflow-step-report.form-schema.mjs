export const ToolsWorkflowStepReportFormSchema = {
    "allowRoles": {
        "default": "",
        "required": false
    },
    "allowUserIds": {
        "default": "",
        "required": false
    },
    "createdAt": {
        "default": "",
        "required": false
    },
    "customCheckSql": {
        "default": "",
        "required": false
    },
    "idWorkflow": {
        "required": true
    },
    "idWorkflowStep": {
        "required": true
    },
    "messageBefore": {
        "default": "",
        "required": false
    },
    "ruleJson": {
        "default": "",
        "required": false
    },
    "statusFrom": {
        "default": "",
        "required": true
    },
    "statusRejectTo": {
        "default": 0,
        "required": false
    },
    "statusTo": {
        "default": "",
        "required": true
    },
    "triggerJson": {
        "default": "",
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    },
    "urutan": {
        "default": 0,
        "required": true
    },
    "workflow": {
        "default": "",
        "required": true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMtd29ya2Zsb3ctc3RlcC1yZXBvcnQuZm9ybS1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZGtjb3JlL3NyYy9saWIvZm9ybS1zY2hlbWEvdG9vbHMtd29ya2Zsb3ctc3RlcC1yZXBvcnQuZm9ybS1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQUc7SUFDL0MsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRvb2xzV29ya2Zsb3dTdGVwUmVwb3J0Rm9ybVNjaGVtYSA9IHtcbiAgXCJhbGxvd1JvbGVzXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiYWxsb3dVc2VySWRzXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiY3JlYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiY3VzdG9tQ2hlY2tTcWxcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFdvcmtmbG93XCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJpZFdvcmtmbG93U3RlcFwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwibWVzc2FnZUJlZm9yZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInJ1bGVKc29uXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzRnJvbVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwic3RhdHVzUmVqZWN0VG9cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJzdGF0dXNUb1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwidHJpZ2dlckpzb25cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cGRhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cnV0YW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcIndvcmtmbG93XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfVxufTtcbiJdfQ==