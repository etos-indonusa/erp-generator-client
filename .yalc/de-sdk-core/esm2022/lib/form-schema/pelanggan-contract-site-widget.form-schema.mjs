export const PelangganContractSiteWidgetFormSchema = {
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
    "statusContractSite": {
        "default": "",
        "required": false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVsYW5nZ2FuLWNvbnRyYWN0LXNpdGUtd2lkZ2V0LmZvcm0tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL2Zvcm0tc2NoZW1hL3BlbGFuZ2dhbi1jb250cmFjdC1zaXRlLXdpZGdldC5mb3JtLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FBRztJQUNuRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELGNBQWMsRUFBRTtRQUNkLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxvQkFBb0IsRUFBRTtRQUNwQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFBlbGFuZ2dhbkNvbnRyYWN0U2l0ZVdpZGdldEZvcm1TY2hlbWEgPSB7XG4gIFwiYmlheWFBa2hpclwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImJpYXlhQnVsYW5hblwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IDAsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImJpYXlhRGlhd2FsXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwiY2F0YXRhblwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImNyZWF0ZWRBdFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICB9LFxuICBcImlkQ2xpZW50U2l0ZVwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaWRDb250cmFjdFwiOiB7XG4gICAgXCJyZXF1aXJlZFwiOiB0cnVlXG4gIH0sXG4gIFwiaWRDb250cmFjdFNpdGVcIjoge1xuICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICB9LFxuICBcImp1bWxhaEphZHdhbFBlckJ1bGFuXCI6IHtcbiAgICBcImRlZmF1bHRcIjogMCxcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwic3RhdHVzQ29udHJhY3RTaXRlXCI6IHtcbiAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gIH0sXG4gIFwidG90YWxcIjoge1xuICAgIFwiZGVmYXVsdFwiOiAwLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfSxcbiAgXCJ1cGRhdGVkQXRcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgfVxufTtcbiJdfQ==