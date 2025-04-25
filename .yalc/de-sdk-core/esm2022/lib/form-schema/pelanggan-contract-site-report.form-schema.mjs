export const PelangganContractSiteReportFormSchema = {
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
    "contract": {
        "default": "",
        "required": true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVsYW5nZ2FuLWNvbnRyYWN0LXNpdGUtcmVwb3J0LmZvcm0tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL2Zvcm0tc2NoZW1hL3BlbGFuZ2dhbi1jb250cmFjdC1zaXRlLXJlcG9ydC5mb3JtLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FBRztJQUNuRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQZWxhbmdnYW5Db250cmFjdFNpdGVSZXBvcnRGb3JtU2NoZW1hID0ge1xuICBcImJpYXlhQWtoaXJcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJiaWF5YUJ1bGFuYW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJiaWF5YURpYXdhbFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImNhdGF0YW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJjb250cmFjdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiY3JlYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiaWRDbGllbnRTaXRlXCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJpZENvbnRyYWN0XCI6IHtcbiAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgfSxcbiAgXCJpZENvbnRyYWN0U2l0ZVwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwianVtbGFoSmFkd2FsUGVyQnVsYW5cIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJuaWxhaVRvdGFsXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzQ29udHJhY3RTaXRlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidXBkYXRlZEF0XCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH1cbn07XG4iXX0=