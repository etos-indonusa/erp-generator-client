export const AmimsMaintenanceWidgetFormSchema = {
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
    "total": {
        "default": 0,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1pbXMtbWFpbnRlbmFuY2Utd2lkZ2V0LmZvcm0tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL2Zvcm0tc2NoZW1hL2FtaW1zLW1haW50ZW5hbmNlLXdpZGdldC5mb3JtLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGVBQWUsRUFBRTtRQUNmLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQW1pbXNNYWludGVuYW5jZVdpZGdldEZvcm1TY2hlbWEgPSB7XG4gIFwiYWxlcnRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJhbGVydFBhcmFtXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiYXRhY2hhcHRlclwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImNyZWF0ZWRBdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImN5Y2xlRnJvbVwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImN5Y2xlVG9cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmbGlnaHRIb3Vyc0Zyb21cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJmbGlnaHRIb3Vyc1RvXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRNYWludGVuYW5jZVwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaWRNYWludGVuYW5jZUNvZGVcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZE1wYXJ0XCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRVc2VyXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwibm90ZU1haW50ZW5hbmNlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwib2xkSWRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJvbkxvY2F0aW9uXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwicmVwZXRpdGlvbnNcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ0aW1lUmFuZ2VGb3JtXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidGltZVJhbmdlVG9cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ0aW1lVW5pdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcInRvdGFsXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidHlwZU1haW50ZW5hbmNlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidXBkYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH1cbn07XG4iXX0=