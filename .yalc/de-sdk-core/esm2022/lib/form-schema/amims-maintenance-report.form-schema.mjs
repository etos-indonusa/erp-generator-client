export const AmimsMaintenanceReportFormSchema = {
    "alert": {
        "default": 0,
        "required": false
    },
    "alertParam": {
        "default": "",
        "required": false
    },
    "atachapter": {
        "default": "",
        "required": false
    },
    "createdAt": {
        "default": "",
        "required": false
    },
    "cycleFrom": {
        "default": 0,
        "required": false
    },
    "cycleTo": {
        "default": 0,
        "required": false
    },
    "flightHoursFrom": {
        "default": 0,
        "required": false
    },
    "flightHoursTo": {
        "default": 0,
        "required": false
    },
    "idMaintenance": {
        "required": true
    },
    "idMaintenanceCode": {
        "required": false
    },
    "idMpart": {
        "required": false
    },
    "idUser": {
        "required": false
    },
    "mpart": {
        "default": "",
        "required": true
    },
    "noteMaintenance": {
        "default": "",
        "required": false
    },
    "oldId": {
        "default": "",
        "required": false
    },
    "onLocation": {
        "default": "",
        "required": false
    },
    "repetitions": {
        "default": 0,
        "required": false
    },
    "timeRangeForm": {
        "default": 0,
        "required": false
    },
    "timeRangeTo": {
        "default": 0,
        "required": false
    },
    "timeUnit": {
        "default": "",
        "required": false
    },
    "typeMaintenance": {
        "default": "",
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1pbXMtbWFpbnRlbmFuY2UtcmVwb3J0LmZvcm0tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL2Zvcm0tc2NoZW1hL2FtaW1zLW1haW50ZW5hbmNlLXJlcG9ydC5mb3JtLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQW1pbXNNYWludGVuYW5jZVJlcG9ydEZvcm1TY2hlbWEgPSB7XG4gIFwiYWxlcnRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJhbGVydFBhcmFtXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXRhY2hhcHRlclwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImNyZWF0ZWRBdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImN5Y2xlRnJvbVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImN5Y2xlVG9cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmbGlnaHRIb3Vyc0Zyb21cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmbGlnaHRIb3Vyc1RvXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRNYWludGVuYW5jZVwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaWRNYWludGVuYW5jZUNvZGVcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZE1wYXJ0XCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRVc2VyXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwibXBhcnRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcIm5vdGVNYWludGVuYW5jZVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcIm9sZElkXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwib25Mb2NhdGlvblwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInJlcGV0aXRpb25zXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidGltZVJhbmdlRm9ybVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInRpbWVSYW5nZVRvXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidGltZVVuaXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ0eXBlTWFpbnRlbmFuY2VcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cGRhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfVxufTtcbiJdfQ==