export const PelangganContractSiteFormSchema = {
    "biayaAkhir": {
        "default": 0,
        "required": false
    },
    "biayaBulanan": {
        "default": 0,
        "required": false
    },
    "biayaDiawal": {
        "default": 0,
        "required": false
    },
    "catatan": {
        "default": "",
        "required": false
    },
    "createdAt": {
        "default": "",
        "required": false
    },
    "idClientSite": {
        "required": true
    },
    "idContract": {
        "required": true
    },
    "idContractSite": {
        "required": true
    },
    "jumlahJadwalPerBulan": {
        "default": 0,
        "required": false
    },
    "nilaiTotal": {
        "default": 0,
        "required": false
    },
    "statusContractSite": {
        "default": "",
        "required": false
    },
    "updatedAt": {
        "default": "",
        "required": false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVsYW5nZ2FuLWNvbnRyYWN0LXNpdGUuZm9ybS1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zZGtjb3JlL3NyYy9saWIvZm9ybS1zY2hlbWEvcGVsYW5nZ2FuLWNvbnRyYWN0LXNpdGUuZm9ybS1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUc7SUFDN0MsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQZWxhbmdnYW5Db250cmFjdFNpdGVGb3JtU2NoZW1hID0ge1xuICBcImJpYXlhQWtoaXJcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJiaWF5YUJ1bGFuYW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJiaWF5YURpYXdhbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImNhdGF0YW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJjcmVhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJpZENsaWVudFNpdGVcIjoge1xuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkQ29udHJhY3RcIjoge1xuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImlkQ29udHJhY3RTaXRlXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJqdW1sYWhKYWR3YWxQZXJCdWxhblwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcIm5pbGFpVG90YWxcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJzdGF0dXNDb250cmFjdFNpdGVcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cGRhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfVxufTtcbiJdfQ==