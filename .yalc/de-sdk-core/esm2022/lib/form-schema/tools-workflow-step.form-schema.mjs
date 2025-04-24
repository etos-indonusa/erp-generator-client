export const ToolsWorkflowStepFormSchema = {
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
        "default": "",
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
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMtd29ya2Zsb3ctc3RlcC5mb3JtLXNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nka2NvcmUvc3JjL2xpYi9mb3JtLXNjaGVtYS90b29scy13b3JrZmxvdy1zdGVwLmZvcm0tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFHO0lBQ3pDLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRvb2xzV29ya2Zsb3dTdGVwRm9ybVNjaGVtYSA9IHtcbiAgXCJhbGxvd1JvbGVzXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiYWxsb3dVc2VySWRzXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiY3JlYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiY3VzdG9tQ2hlY2tTcWxcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFdvcmtmbG93XCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJpZFdvcmtmbG93U3RlcFwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwibWVzc2FnZUJlZm9yZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInJ1bGVKc29uXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzRnJvbVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwic3RhdHVzUmVqZWN0VG9cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJzdGF0dXNUb1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwidHJpZ2dlckpzb25cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cGRhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cnV0YW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9XG59O1xuIl19