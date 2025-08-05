export const ToolsWorkflowWidgetFormSchema = {
    "createdAt": {
        "default": "",
        "required": false
    },
    "forModule": {
        "default": "",
        "required": true
    },
    "idKantor": {
        "required": false
    },
    "idWorkflow": {
        "required": true
    },
    "isDefault": {
        "default": false,
        "required": false
    },
    "keterangan": {
        "default": "",
        "required": false
    },
    "namaWorkflow": {
        "default": "",
        "required": true
    },
    "statusField": {
        "default": "",
        "required": false
    },
    "statusWorkflow": {
        "default": "",
        "required": false
    },
    "targetDb": {
        "default": "",
        "required": true
    },
    "targetTable": {
        "default": "",
        "required": true
    },
    "total": {
        "default": 0,
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMtd29ya2Zsb3ctd2lkZ2V0LmZvcm0tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL2Zvcm0tc2NoZW1hL3Rvb2xzLXdvcmtmbG93LXdpZGdldC5mb3JtLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQyxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUb29sc1dvcmtmbG93V2lkZ2V0Rm9ybVNjaGVtYSA9IHtcbiAgXCJjcmVhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmb3JNb2R1bGVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkS2FudG9yXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRXb3JrZmxvd1wiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaXNEZWZhdWx0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogZmFsc2UsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImtldGVyYW5nYW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJuYW1hV29ya2Zsb3dcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcInN0YXR1c0ZpZWxkXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzV29ya2Zsb3dcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ0YXJnZXREYlwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwidGFyZ2V0VGFibGVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcInRvdGFsXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidXBkYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH1cbn07XG4iXX0=