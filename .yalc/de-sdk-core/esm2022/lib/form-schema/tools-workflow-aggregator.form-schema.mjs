export const ToolsWorkflowAggregatorFormSchema = {
    "createdAt": {
        "default": "",
        "required": false
    },
    "fromModule": {
        "default": "",
        "required": true
    },
    "fromModuleId": {
        "default": "",
        "required": true
    },
    "idWorkflow": {
        "required": true
    },
    "idWorkflowAggregator": {
        "required": true
    },
    "lastApprovalDate": {
        "default": "",
        "required": false
    },
    "lastApprovalNote": {
        "default": "",
        "required": false
    },
    "lastApprovalStatus": {
        "default": "",
        "required": false
    },
    "lastApprovalUser": {
        "default": "",
        "required": false
    },
    "lastWorkflowStep": {
        "default": "",
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMtd29ya2Zsb3ctYWdncmVnYXRvci5mb3JtLXNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nka2NvcmUvc3JjL2xpYi9mb3JtLXNjaGVtYS90b29scy13b3JrZmxvdy1hZ2dyZWdhdG9yLmZvcm0tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHO0lBQy9DLFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDdEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRm9ybVNjaGVtYSA9IHtcbiAgXCJjcmVhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmcm9tTW9kdWxlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJmcm9tTW9kdWxlSWRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkV29ya2Zsb3dcIjoge1xuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkV29ya2Zsb3dBZ2dyZWdhdG9yXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJsYXN0QXBwcm92YWxEYXRlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwibGFzdEFwcHJvdmFsTm90ZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImxhc3RBcHByb3ZhbFN0YXR1c1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImxhc3RBcHByb3ZhbFVzZXJcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJsYXN0V29ya2Zsb3dTdGVwXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidXBkYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH1cbn07XG4iXX0=