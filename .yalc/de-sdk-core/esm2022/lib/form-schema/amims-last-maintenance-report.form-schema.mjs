export const AmimsLastMaintenanceReportFormSchema = {
    "createdAt": {
        "default": "",
        "required": false
    },
    "idLastMaintenance": {
        "required": true
    },
    "idMaintenance": {
        "required": false
    },
    "idPart": {
        "required": false
    },
    "idUser": {
        "required": false
    },
    "idWpJo": {
        "required": false
    },
    "lastCycle": {
        "default": 0,
        "required": false
    },
    "lastDate": {
        "default": "",
        "required": false
    },
    "lastHours": {
        "default": 0,
        "required": false
    },
    "maintenance": {
        "default": "",
        "required": true
    },
    "oldId": {
        "default": "",
        "required": false
    },
    "parentCycle": {
        "default": 0,
        "required": false
    },
    "parentHours": {
        "default": 0,
        "required": false
    },
    "part": {
        "default": "",
        "required": true
    },
    "typeOfWork": {
        "default": 0,
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1pbXMtbGFzdC1tYWludGVuYW5jZS1yZXBvcnQuZm9ybS1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZGtjb3JlL3NyYy9saWIvZm9ybS1zY2hlbWEvYW1pbXMtbGFzdC1tYWludGVuYW5jZS1yZXBvcnQuZm9ybS1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sb0NBQW9DLEdBQUc7SUFDbEQsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG1CQUFtQixFQUFFO1FBQ25CLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxRQUFRLEVBQUU7UUFDUixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBbWltc0xhc3RNYWludGVuYW5jZVJlcG9ydEZvcm1TY2hlbWEgPSB7XG4gIFwiY3JlYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRMYXN0TWFpbnRlbmFuY2VcIjoge1xuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkTWFpbnRlbmFuY2VcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFBhcnRcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFVzZXJcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFdwSm9cIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJsYXN0Q3ljbGVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJsYXN0RGF0ZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImxhc3RIb3Vyc1wiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcIm1haW50ZW5hbmNlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJvbGRJZFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInBhcmVudEN5Y2xlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwicGFyZW50SG91cnNcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJwYXJ0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJ0eXBlT2ZXb3JrXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidXBkYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH1cbn07XG4iXX0=