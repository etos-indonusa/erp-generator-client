import {
    MenuItem as SidebarMenuItem
} from '../sidebar/menu.model';
import {
    MenuItem as TopbarMenuItem,
    SubMenus,
    SubMenuItems
} from './menu.model';

/**
 * Membagi subMenuItems menjadi kolom dengan batas maksimum per kolom.
 */
function splitIntoColumnsWithMaxItems(
    title: string,
    items: SubMenuItems[],
    maxPerColumn = 8
): SubMenus[] {
    const columns: SubMenus[] = [];
    for (let i = 0; i < items.length; i += maxPerColumn) {
        const chunk = items.slice(i, i + maxPerColumn);
        columns.push({
            subMenuItems: i === 0
                ? [{ label: title, isTitle: true }, ...chunk]
                : chunk
        });
    }
    return columns;
}

/**
 * Fungsi utama untuk konversi sidebar → topbar
 */
export function convertGroupedSidebarToTopbar(sidebarMenu: SidebarMenuItem[]): TopbarMenuItem[] {
    const topbar: TopbarMenuItem[] = [];

    let groupBuffer: SidebarMenuItem[] = [];
    let currentTitle: SidebarMenuItem | null = null;

    const pushGroupedMenu = () => {
        if (!currentTitle || groupBuffer.length === 0) return;

        // Hitung total child untuk tentukan isMegaMenu
        const totalChildren = groupBuffer.reduce((acc, item) => {
            if (item.subItems) {
                return acc + item.subItems.length;
            }
            return acc + 1;
        }, 0);

        const topbarItem: TopbarMenuItem = {
            label: currentTitle.label ?? 'Group',
            icon: groupBuffer[0]?.icon ?? 'menu',
            isMegaMenu: totalChildren > 10,
            subMenus: []
        };

        const withSubItems = groupBuffer.filter(i => i.subItems);
        const withoutSubItems = groupBuffer.filter(i => !i.subItems);

        // Proses menu yang punya subItems
        for (const parent of withSubItems) {
            const subItems: SubMenuItems[] = parent.subItems!.map((sub:any): SubMenuItems => ({
                label: sub.label,
                link: sub.link,
                badge: sub.badge
            }));

            const columns = splitIntoColumnsWithMaxItems(parent.label!, subItems);
            topbarItem.subMenus!.push(...columns);
        }

        // Proses menu langsung (tanpa subItems)
        if (withoutSubItems.length > 0) {
            const items: SubMenuItems[] = withoutSubItems.map((item): SubMenuItems => ({
                label: item.label!,
                link: item.link,
                badge: item.badge
            }));

            const columns = splitIntoColumnsWithMaxItems('Other', items);
            topbarItem.subMenus!.push(...columns);
        }

        topbar.push(topbarItem);
    };

    for (const item of sidebarMenu) {
        if (item.isTitle) {
            pushGroupedMenu();
            currentTitle = item;
            groupBuffer = [];
        } else {
            groupBuffer.push(item);
        }
    }

    pushGroupedMenu(); // Final push
    return topbar;
}
