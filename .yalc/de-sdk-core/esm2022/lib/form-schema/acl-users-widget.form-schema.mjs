export const AclUsersWidgetFormSchema = {
    "createdAt": {
        "default": "",
        "required": false
    },
    "email": {
        "default": "",
        "required": true
    },
    "idUserGroup": {
        "required": false
    },
    "idUsers": {
        "required": true
    },
    "lastLogin": {
        "default": "",
        "required": false
    },
    "nama": {
        "default": "",
        "required": false
    },
    "password": {
        "default": "",
        "required": false
    },
    "status": {
        "default": "",
        "required": false
    },
    "total": {
        "default": 0,
        "required": false
    },
    "wajibResetPassword": {
        "default": false,
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLXVzZXJzLXdpZGdldC5mb3JtLXNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nka2NvcmUvc3JjL2xpYi9mb3JtLXNjaGVtYS9hY2wtdXNlcnMtd2lkZ2V0LmZvcm0tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHO0lBQ3RDLFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFjbFVzZXJzV2lkZ2V0Rm9ybVNjaGVtYSA9IHtcbiAgXCJjcmVhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJlbWFpbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaWRVc2VyR3JvdXBcIjoge1xuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZFVzZXJzXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJsYXN0TG9naW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJuYW1hXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwicGFzc3dvcmRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJzdGF0dXNcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ0b3RhbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcIndhamliUmVzZXRQYXNzd29yZFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IGZhbHNlLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfVxufTtcbiJdfQ==