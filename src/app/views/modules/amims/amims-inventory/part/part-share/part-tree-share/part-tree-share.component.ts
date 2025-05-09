import { Component } from '@angular/core';

interface Item {
    id: string;
    parent: string;
    text: string;
}

interface NzTreeNode {
    title: string;
    key: string;
    children?: NzTreeNode[];
}


@Component({
  selector: 'app-part-tree-share',
  templateUrl: './part-tree-share.component.html',
  styleUrl: './part-tree-share.component.scss'
})
export class PartTreeShareComponent {
    
    constructor()
    {}
    treeData: NzTreeNode[] = [];
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        const flatList = tree_data; // data dari API atau variabel Anda
        this.treeData = buildTree(flatList);
    }
}

function buildTree(flatList: Item[]): NzTreeNode[] {
    const map = new Map<string, NzTreeNode>();

    // Step 1: Buat node kosong
    for (const item of flatList) {
        map.set(item.id, {
            title: item.text,
            key: item.id,
            children: []
        });
    }

    const tree: NzTreeNode[] = [];

    // Step 2: Susun parent-child
    for (const item of flatList) {
        const node = map.get(item.id)!;
        if (item.parent === '#' || !map.has(item.parent)) {
            tree.push(node); // root node
        } else {
            const parent = map.get(item.parent)!;
            parent.children!.push(node);
        }
    }

    return tree;
}

const tree_data = [
    {
        "id": "TMPI39917",
        "parent": "TMPI39722",
        "text": "COUPLING -> 204-040-603-009 -> BGFS1629"
    },
    {
        "id": "TMPI40159",
        "parent": "TMPI39722",
        "text": "SHAFT ASSY, T/R -> 204-040-620-009 -> A-6752"
    },
    {
        "id": "TMPI40225",
        "parent": "TMPI39722",
        "text": "HOSE ASSY -> 70-061F000X121A -> NA"
    },
    {
        "id": "TMPI39668",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-061H000V214A -> N/A."
    },
    {
        "id": "TMPI43305",
        "parent": "TMPI39722",
        "text": "TRANSPONDER KT-74 -> 89000007-000001 -> 03410"
    },
    {
        "id": "TMPI39507",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 412-061-610-103 -> N/A."
    },
    {
        "id": "TMPI44044",
        "parent": "TMPI39722",
        "text": "TRANSMITTER -> APTE-138A-50G -> 5959-8-276"
    },
    {
        "id": "TMPI39296",
        "parent": "TMPI39722",
        "text": "BLADE ASSY -> 412-015-300-109 -> A-687"
    },
    {
        "id": "TMPI39297",
        "parent": "TMPI39722",
        "text": "BLADE ASSY -> 412-015-300-109 -> A2702"
    },
    {
        "id": "TMPI40161",
        "parent": "TMPI39722",
        "text": "BLADE ASSY -> 412-015-300-109 -> A1318"
    },
    {
        "id": "TMPI39709",
        "parent": "TMPI39722",
        "text": "BLADE ASSY -> 412-015-300-109 -> A2584"
    },
    {
        "id": "TMPI42566",
        "parent": "TMPI39869",
        "text": "PIVOT BEARING -> 412-010-106-101 -> CB7593"
    },
    {
        "id": "TMPI42564",
        "parent": "TMPI39869",
        "text": "PIVOT BEARING -> 412-010-106-101 -> LK0455RS"
    },
    {
        "id": "TMPI42565",
        "parent": "TMPI39869",
        "text": "PIVOT BEARING -> 412-010-106-101 -> LK0217RS"
    },
    {
        "id": "TMPI42567",
        "parent": "TMPI39869",
        "text": "PIVOT BEARING -> 412-010-106-101 -> CB4993"
    },
    {
        "id": "TMPI40162",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A-7900"
    },
    {
        "id": "TMPI39087",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A-7840"
    },
    {
        "id": "TMPI40163",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A-7842"
    },
    {
        "id": "TMPI39920",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A-7847"
    },
    {
        "id": "TMPI40165",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A3930"
    },
    {
        "id": "TMPI40560",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A4494"
    },
    {
        "id": "TMPI39713",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A4514"
    },
    {
        "id": "TMPI39298",
        "parent": "TMPI39722",
        "text": "RETENTION BOLT, M/R HUB -> 412-010-124-109 -> A4511"
    },
    {
        "id": "TMPI43264",
        "parent": "TMPI40223",
        "text": "YOKE ASSY, TAIL ROTOR -> 212-011-702-001 -> HB898"
    },
    {
        "id": "TMPI42568",
        "parent": "TMPI39869",
        "text": "UPPER CONE -> 412-010-165-101 -> A-1184"
    },
    {
        "id": "TMPI42569",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE ASSY -> 412-010-185-109 -> A85"
    },
    {
        "id": "TMPI42570",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE ASSY -> 412-010-185-109 -> A65"
    },
    {
        "id": "TMPI42571",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE ASSY -> 412-010-185-109 -> A284"
    },
    {
        "id": "TMPI42572",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE ASSY -> 412-010-185-109 -> A116"
    },
    {
        "id": "TMPI42573",
        "parent": "TMPI39869",
        "text": "SPINDLE ASSY -> 412-010-190-103 -> LK246"
    },
    {
        "id": "TMPI40414",
        "parent": "TMPI39869",
        "text": "SPINDLE ASSY -> 412-010-190-103 -> LK6109"
    },
    {
        "id": "TMPI42574",
        "parent": "TMPI39869",
        "text": "SPINDLE ASSY -> 412-010-190-103 -> LK471"
    },
    {
        "id": "TMPI42596",
        "parent": "TMPI39869",
        "text": "SPINDLE ASSY -> 412-010-190-103 -> LK1948"
    },
    {
        "id": "TMPI42575",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-105 -> A-8124"
    },
    {
        "id": "TMPI42576",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-105 -> A-8122"
    },
    {
        "id": "TMPI42577",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-105 -> A-8121"
    },
    {
        "id": "TMPI42578",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-105 -> A-8123"
    },
    {
        "id": "TMPI39925",
        "parent": "TMPI39722",
        "text": "COLLECTIVE LEVER ASSY -> 412-010-408-101 -> A-1188"
    },
    {
        "id": "TMPI39089",
        "parent": "TMPI39722",
        "text": "SUPPORT -> 412-050-005-101 -> NA"
    },
    {
        "id": "TMPI41284",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-117 -> F-1236"
    },
    {
        "id": "TMPI40386",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-117 -> F-1338"
    },
    {
        "id": "TMPI40562",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-117 -> F-1299"
    },
    {
        "id": "TMPI40385",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-117 -> F-1317"
    },
    {
        "id": "TMPI39513",
        "parent": "TMPI39722",
        "text": "ISOLATION AMPLI -> 412-074-030-101 -> UNK"
    },
    {
        "id": "TMPI39091",
        "parent": "TMPI39722",
        "text": "ISOLATION AMPLI -> 412-074-030-101 -> GT225"
    },
    {
        "id": "TMPI39718",
        "parent": "TMPI39722",
        "text": "M/R MAST ASSY -> 412-040-366-105 -> A-63"
    },
    {
        "id": "TMPI43764",
        "parent": "TMPI39722",
        "text": "FUEL BOOST PUMP CARTRIDGE -> 2C27-3 -> 1BM24"
    },
    {
        "id": "TMPI39092",
        "parent": "TMPI39722",
        "text": "FUEL BOOST PUMP CARTRIDGE -> 2C27-3 -> 5BG188"
    },
    {
        "id": "TMPI39928",
        "parent": "TMPI39722",
        "text": "TRANSMITTER -> 130-020-5 -> 9449-066"
    },
    {
        "id": "TMPI39096",
        "parent": "TMPI40211",
        "text": "BATTERY, ELT ARTEX -> 452-0133 -> 393416-007"
    },
    {
        "id": "TMPI39722",
        "parent": "#",
        "text": "AIRCRAFT -> BELL 412SP -> 34016"
    },
    {
        "id": "TMPI39098",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012H000D170 -> NSN"
    },
    {
        "id": "TMPI42128",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077N000V157 -> N.A."
    },
    {
        "id": "TMPI41726",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077P157W240 -> N.A."
    },
    {
        "id": "TMPI39517",
        "parent": "TMPI39722",
        "text": "RADIO ALTIMETER IND. -> 7000839-904 -> 81071609"
    },
    {
        "id": "TMPI39345",
        "parent": "TMPI39722",
        "text": "TRANSMISSION HOSE -> 70-061F090F091A -> NA"
    },
    {
        "id": "TMPI42104",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009F000X200A -> N.A."
    },
    {
        "id": "TMPI40238",
        "parent": "TMPI39722",
        "text": "FLUX VALVE -> 160-027-603 -> 2010M053"
    },
    {
        "id": "TMPI39932",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009F180F122A -> NA"
    },
    {
        "id": "TMPI39933",
        "parent": "TMPI39722",
        "text": "ACTUATOR -> 214-001-347-005 -> 3136"
    },
    {
        "id": "TMPI39725",
        "parent": "TMPI39722",
        "text": "TAIL ROTOR G/BOX (90 DEG) -> 212-040-004-009 -> AHT07102"
    },
    {
        "id": "TMPI39934",
        "parent": "TMPI39265",
        "text": "REPHASING LEVER -> 412-010-403-113 -> A-6212"
    },
    {
        "id": "TMPI39728",
        "parent": "TMPI39265",
        "text": "REPHASING LEVER -> 412-010-403-113 -> A-6213"
    },
    {
        "id": "TMPI39333",
        "parent": "TMPI39722",
        "text": "T/R BLADE -> 212-010-750-113 -> A-15687"
    },
    {
        "id": "TMPI40411",
        "parent": "TMPI39722",
        "text": "T/R BLADE -> 212-010-750-113 -> A-13131"
    },
    {
        "id": "TMPI40567",
        "parent": "TMPI39722",
        "text": "BLOWER, OIL COOLER -> 209-062-502-101 -> 5100-1117"
    },
    {
        "id": "TMPI39729",
        "parent": "TMPI39722",
        "text": "BLOWER, OIL COOLER -> 209-062-502-101 -> 5100"
    },
    {
        "id": "TMPI39936",
        "parent": "#",
        "text": "POWER SECTION -> 3017600 -> CP-PS 62917"
    },
    {
        "id": "TMPI39731",
        "parent": "#",
        "text": "POWER SECTION -> 3017600 -> CP-PS 63033"
    },
    {
        "id": "TMPI39104",
        "parent": "TMPI39722",
        "text": "CHRONOMETER -> AT420100 -> 67229"
    },
    {
        "id": "TMPI42579",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N10"
    },
    {
        "id": "TMPI42580",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N16"
    },
    {
        "id": "TMPI42581",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N15"
    },
    {
        "id": "TMPI42582",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N14"
    },
    {
        "id": "TMPI42583",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N13"
    },
    {
        "id": "TMPI42584",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N12"
    },
    {
        "id": "TMPI42585",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N11"
    },
    {
        "id": "TMPI42586",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N9"
    },
    {
        "id": "TMPI42587",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N8"
    },
    {
        "id": "TMPI42588",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N7"
    },
    {
        "id": "TMPI42589",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N6"
    },
    {
        "id": "TMPI42590",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N5"
    },
    {
        "id": "TMPI42591",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N4"
    },
    {
        "id": "TMPI42592",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N3"
    },
    {
        "id": "TMPI42593",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N2"
    },
    {
        "id": "TMPI42594",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6604-H34 -> N1"
    },
    {
        "id": "TMPI39525",
        "parent": "TMPI39722",
        "text": "VOR RECEIVER -> 622-6137-001 -> 8600"
    },
    {
        "id": "TMPI39108",
        "parent": "TMPI39722",
        "text": "VOR RECEIVER -> 622-6137-001 -> 8674"
    },
    {
        "id": "TMPI43704",
        "parent": "TMPI39722",
        "text": "TRANSMITTER PROBE L/H -> 20036-0000-0101 -> 128"
    },
    {
        "id": "TMPI39526",
        "parent": "TMPI39722",
        "text": "BLOWER ASSY -> 206-070-475-005 -> 15162"
    },
    {
        "id": "TMPI42344",
        "parent": "TMPI39722",
        "text": "BLOWER ASSY -> 206-070-475-005 -> 29787"
    },
    {
        "id": "TMPI41025",
        "parent": "TMPI39722",
        "text": "FLIGHT DIRECTOR -> 4033089-901 -> 89031023"
    },
    {
        "id": "TMPI40400",
        "parent": "TMPI39722",
        "text": "BOLT, CONTRL SYST  -> 671800 -> NA"
    },
    {
        "id": "TMPI39317",
        "parent": "TMPI39722",
        "text": "RADIO ALTIMETER IND. -> 4014267-901 -> 78082225"
    },
    {
        "id": "TMPI43364",
        "parent": "TMPI39722",
        "text": "INDICATOR, ENG. OIL -> 209-070-262-101 -> 80M0334"
    },
    {
        "id": "TMPI39117",
        "parent": "TMPI39722",
        "text": "CONTROL COMM -> 212-077-200-103 -> 9102063"
    },
    {
        "id": "TMPI39118",
        "parent": "TMPI39722",
        "text": "CONTROL COMM -> 212-077-200-103 -> 9102065"
    },
    {
        "id": "TMPI42893",
        "parent": "TMPI39722",
        "text": "NAV. CONTROL -> 622-6521-016 -> 16615"
    },
    {
        "id": "TMPI39119",
        "parent": "TMPI39722",
        "text": "SWASHPLATE & SUPPORT -> 412-010-402-105 -> RE-294"
    },
    {
        "id": "TMPI39798",
        "parent": "TMPI39722",
        "text": "P3-FILTER ELEMENT -> 3059787-01A -> DAS-P3-002"
    },
    {
        "id": "TMPI39120",
        "parent": "TMPI39722",
        "text": "DME RECEIVER ASSY -> 622-6263-001 -> 7011"
    },
    {
        "id": "TMPI39736",
        "parent": "TMPI39722",
        "text": "CABIN FIREX -> MODEL 352 -> V460537"
    },
    {
        "id": "TMPI43204",
        "parent": "TMPI39722",
        "text": "CABIN FIRE EXTINGUISHER -> 1600 -> NA"
    },
    {
        "id": "TMPI43246",
        "parent": "TMPI40156",
        "text": "CARTRIDGE, ENG. FIREX -> 209-062-908-019 -> F073-001"
    },
    {
        "id": "TMPI39540",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077L000R230 -> NA.1"
    },
    {
        "id": "TMPI41589",
        "parent": "TMPI39731",
        "text": "BLEED VALVE -> 540-1407-4 -> 4508"
    },
    {
        "id": "TMPI39131",
        "parent": "TMPI39722",
        "text": "PERSONAL LOC. BEACON -> 500-12Y -> 10485"
    },
    {
        "id": "TMPI40580",
        "parent": "TMPI39722",
        "text": "PERSONAL LOC. BEACON -> 500-12Y -> 10484"
    },
    {
        "id": "TMPI42285",
        "parent": "TMPI39722",
        "text": "FILTER ELEMENT -> 3059256-01 -> DAS-006"
    },
    {
        "id": "TMPI41485",
        "parent": "TMPI39722",
        "text": "FILTER ELEMENT -> 3059256-01 -> DAS-005"
    },
    {
        "id": "TMPI39543",
        "parent": "TMPI39722",
        "text": "FILTER ELEMENT -> 3059256-01 -> DAS-004"
    },
    {
        "id": "TMPI39133",
        "parent": "TMPI39722",
        "text": "POWER SUPPLY -> 212-075-962-001 -> KG6128"
    },
    {
        "id": "TMPI43329",
        "parent": "TMPI39722",
        "text": "BEARING -> 212-061-101-001 -> NA.3"
    },
    {
        "id": "TMPI42595",
        "parent": "TMPI39869",
        "text": "LOWER CONE SEAT -> 412-010-179-105 -> RE284"
    },
    {
        "id": "TMPI39474",
        "parent": "TMPI39722",
        "text": "ALTIMETER INDICATOR -> 1003511424 -> 1136644"
    },
    {
        "id": "TMPI39963",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012F000D100 -> NA"
    },
    {
        "id": "TMPI41664",
        "parent": "TMPI39936",
        "text": "OIL TO FUEL HEATER -> 3049386-02 -> WA62949"
    },
    {
        "id": "TMPI39743",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009F000Y287A -> NA"
    },
    {
        "id": "TMPI39546",
        "parent": "TMPI39936",
        "text": "IMPELLER -> 3027798 -> 6C268"
    },
    {
        "id": "TMPI39547",
        "parent": "TMPI39722",
        "text": "RPM LIMIT DETECTOR -> 214-074-280-107 -> MR250"
    },
    {
        "id": "TMPI43812",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7203-1 -> 1-11-088-1761"
    },
    {
        "id": "TMPI43811",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7203-1 -> 1-11-087-1761"
    },
    {
        "id": "TMPI43713",
        "parent": "TMPI39722",
        "text": "LEVER ASSY -> 209-011-712-101 -> VLFS00274550"
    },
    {
        "id": "TMPI40415",
        "parent": "TMPI39722",
        "text": "TRANSMISSION ASSY -> 412-040-002-109 -> A-77"
    },
    {
        "id": "TMPI39969",
        "parent": "TMPI39722",
        "text": "VHF COMM.CONTROL -> 622-6520-008 -> 7810"
    },
    {
        "id": "TMPI41384",
        "parent": "TMPI39722",
        "text": "VHF COMM.CONTROL -> 622-6520-008 -> 15218"
    },
    {
        "id": "TMPI39979",
        "parent": "TMPI39119",
        "text": "BOLT, SWASHPLATE -> 204-011-463-109 -> PB17076"
    },
    {
        "id": "TMPI40422",
        "parent": "TMPI39119",
        "text": "BOLT, SWASHPLATE -> 204-011-463-109 -> AI68704"
    },
    {
        "id": "TMPI39750",
        "parent": "TMPI39722",
        "text": "BOOT -> 412-061-613-101 -> N/A"
    },
    {
        "id": "TMPI39144",
        "parent": "TMPI39722",
        "text": "SERVO ACTUATOR -> 212-076-005-111 -> HR8266"
    },
    {
        "id": "TMPI39751",
        "parent": "TMPI39722",
        "text": "SERVO ACTUATOR -> 212-076-005-111 -> HR11968"
    },
    {
        "id": "TMPI39752",
        "parent": "TMPI39722",
        "text": "SERVO ACTUATOR -> 212-076-005-111 -> 5714"
    },
    {
        "id": "TMPI40596",
        "parent": "TMPI39722",
        "text": "FUEL HOSE  -> 156115F0185D000 -> NA"
    },
    {
        "id": "TMPI39981",
        "parent": "TMPI39722",
        "text": "PUMP, HYDRAULIC -> 212-076-011-001 -> AU30-D14532EF"
    },
    {
        "id": "TMPI40211",
        "parent": "TMPI39722",
        "text": "ELT 406 MHZ,ARTEX -> 453-5001-525 -> A00046"
    },
    {
        "id": "TMPI39563",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 156005-6D0175 -> NSN"
    },
    {
        "id": "TMPI40427",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST  -> 20-057-8-92D -> 1  EA"
    },
    {
        "id": "TMPI39991",
        "parent": "TMPI39722",
        "text": "WINDOW CREW DOOR -> 204-799-013 -> 3393"
    },
    {
        "id": "TMPI43644",
        "parent": "TMPI39722",
        "text": "STATIC INVERTER -> 412-075-101-101 -> 773"
    },
    {
        "id": "TMPI39354",
        "parent": "TMPI39722",
        "text": "TUBE ASSY -> 412-073-820-101 -> NA"
    },
    {
        "id": "TMPI43664",
        "parent": "TMPI39722",
        "text": "INDICATOR , TACH -> 412-075-010-111 -> 02099"
    },
    {
        "id": "TMPI42597",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A7"
    },
    {
        "id": "TMPI42598",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A6"
    },
    {
        "id": "TMPI42599",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A5"
    },
    {
        "id": "TMPI42600",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A4"
    },
    {
        "id": "TMPI42601",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A3"
    },
    {
        "id": "TMPI42602",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A2"
    },
    {
        "id": "TMPI42603",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A1"
    },
    {
        "id": "TMPI42604",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H14 -> N/A"
    },
    {
        "id": "TMPI44684",
        "parent": "TMPI39722",
        "text": "TACHO GENERATOR -> 32005-037 -> 311096"
    },
    {
        "id": "TMPI44164",
        "parent": "TMPI39722",
        "text": "TACHO GENERATOR -> 32005-037 -> 311267"
    },
    {
        "id": "TMPI40606",
        "parent": "TMPI39722",
        "text": "TACHO GENERATOR -> 32005-037 -> 257884"
    },
    {
        "id": "TMPI42605",
        "parent": "TMPI39869",
        "text": "SPLINED PLATE ASSY -> 412-010-177-101 -> A-1432"
    },
    {
        "id": "TMPI40434",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061K000T293A -> 1Q17."
    },
    {
        "id": "TMPI40610",
        "parent": "TMPI39722",
        "text": "INTERMEDIATE GEAR BOX ASSY -> 212-040-003-023 -> A345"
    },
    {
        "id": "TMPI39575",
        "parent": "TMPI39722",
        "text": "MAIN DRIVE SHAFT -> 212-040-005-103 -> A-244"
    },
    {
        "id": "TMPI41584",
        "parent": "TMPI39731",
        "text": "COMPRESSOR HUB -> 3018111 -> 1W651"
    },
    {
        "id": "TMPI40611",
        "parent": "TMPI39936",
        "text": "COMPRESSOR HUB -> 3018111 -> 4T994"
    },
    {
        "id": "TMPI39982",
        "parent": "TMPI39722",
        "text": "BOTTLE, ENGINE FIREX -> 209-062-908-001 -> 14404B2"
    },
    {
        "id": "TMPI40437",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST  -> 20-057-6-36D -> 6  EA"
    },
    {
        "id": "TMPI43965",
        "parent": "TMPI39722",
        "text": "FIRST AID KIT -> DW-BLD14 -> FA-412.01"
    },
    {
        "id": "TMPI43326",
        "parent": "TMPI39722",
        "text": "FUEL HOSE  -> 70-077P000A250 -> N.A."
    },
    {
        "id": "TMPI39360",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009F000X253A -> NA"
    },
    {
        "id": "TMPI40438",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009K245W347A -> N/A."
    },
    {
        "id": "TMPI39164",
        "parent": "TMPI39722",
        "text": "EXHAUST EJECTOR R/H -> AAL-061-204-002 -> A-193"
    },
    {
        "id": "TMPI39165",
        "parent": "TMPI39265",
        "text": "REPHASING LEVER -> 412-010-403-117 -> A-6241"
    },
    {
        "id": "TMPI39362",
        "parent": "TMPI39265",
        "text": "REPHASING LEVER -> 412-010-403-117 -> A-6252"
    },
    {
        "id": "TMPI42804",
        "parent": "TMPI39722",
        "text": "REFURBISH KIT -> 30907 -> 6162"
    },
    {
        "id": "TMPI39363",
        "parent": "TMPI39448",
        "text": "ROD END BEARING -> 412-310-400-105 -> NH6962"
    },
    {
        "id": "TMPI39579",
        "parent": "TMPI39447",
        "text": "ROD END BEARING -> 412-310-400-105 -> NH7050"
    },
    {
        "id": "TMPI41524",
        "parent": "TMPI39722",
        "text": "HF TRANSCEIVER  -> 064-1015-00 -> 5737"
    },
    {
        "id": "TMPI39365",
        "parent": "TMPI39722",
        "text": "HYD SERVO ACTUATOR -> 212-076-004-005 -> 537"
    },
    {
        "id": "TMPI42888",
        "parent": "TMPI39722",
        "text": "HYD SERVO ACTUATOR -> 212-076-004-005 -> HR3168"
    },
    {
        "id": "TMPI39775",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 124002-6CR0134 -> NSN"
    },
    {
        "id": "TMPI44024",
        "parent": "TMPI39722",
        "text": "CARGO HOOK -> 204-072-915-103 -> EH-1-864"
    },
    {
        "id": "TMPI40231",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE  -> 212-061-015-001 -> NA."
    },
    {
        "id": "TMPI39777",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE  -> 212-061-015-001 -> NA.1"
    },
    {
        "id": "TMPI42606",
        "parent": "TMPI39869",
        "text": "LOWER CONE SEAT -> 412-018-056-105 -> A-1565"
    },
    {
        "id": "TMPI40448",
        "parent": "TMPI39722",
        "text": "UNDER WATER BEACON -> DK-120 -> SD23271"
    },
    {
        "id": "TMPI42874",
        "parent": "TMPI39722",
        "text": "VHF TRANSCEIVER -> 622-6153-002 -> 11093"
    },
    {
        "id": "TMPI42873",
        "parent": "TMPI39722",
        "text": "VHF TRANSCEIVER -> 622-6153-002 -> 30942"
    },
    {
        "id": "TMPI42875",
        "parent": "TMPI39722",
        "text": "ADF RECEIVER -> 622-2362-001 -> 25215"
    },
    {
        "id": "TMPI40453",
        "parent": "TMPI39722",
        "text": "ADF RECEIVER -> 622-2362-001 -> 24948"
    },
    {
        "id": "TMPI40620",
        "parent": "TMPI39722",
        "text": "CVR -> FA2100-1020-00 -> 000209896"
    },
    {
        "id": "TMPI40454",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012H000Y136 -> NA."
    },
    {
        "id": "TMPI40622",
        "parent": "TMPI39819",
        "text": "POWER TURBINE GOVERNOR -> 2524999-6 -> A52659"
    },
    {
        "id": "TMPI40623",
        "parent": "TMPI39819",
        "text": "POWER TURBINE GOVERNOR -> 2524999-6 -> A61407"
    },
    {
        "id": "TMPI39592",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST  -> 20-057-5-24D -> 9  EA"
    },
    {
        "id": "TMPI44364",
        "parent": "TMPI39722",
        "text": "SCREEN ASSY -> 212-061-207-035 -> N/A"
    },
    {
        "id": "TMPI39375",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> 70-072L000B204 -> N.A.3"
    },
    {
        "id": "TMPI39783",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> 70-072L000B204 -> N.A.4"
    },
    {
        "id": "TMPI39180",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> 70-072L000B204 -> N.A.1"
    },
    {
        "id": "TMPI39377",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST -> 20-057-5-28D -> 4  EA"
    },
    {
        "id": "TMPI40011",
        "parent": "TMPI39722",
        "text": "FLUX VALVE -> 2594484 -> 1201K676"
    },
    {
        "id": "TMPI42894",
        "parent": "TMPI39722",
        "text": "INDICATOR, AIRSPEED -> 412-075-009-105 -> 256666"
    },
    {
        "id": "TMPI42607",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6607-D21 -> N/A3"
    },
    {
        "id": "TMPI42608",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6607-D21 -> N/A2"
    },
    {
        "id": "TMPI42609",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6607-D21 -> N/A1"
    },
    {
        "id": "TMPI42610",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6607-D21 -> N/A"
    },
    {
        "id": "TMPI42611",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB  -> NAS-6608-D48 -> N/A3"
    },
    {
        "id": "TMPI42612",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB  -> NAS-6608-D48 -> N/A2 "
    },
    {
        "id": "TMPI42613",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB  -> NAS-6608-D48 -> N/A1"
    },
    {
        "id": "TMPI42614",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB  -> NAS-6608-D48 -> N/A"
    },
    {
        "id": "TMPI43226",
        "parent": "TMPI39722",
        "text": "RADAR TRANCEIVER -> 4000831-0103 -> 1934"
    },
    {
        "id": "TMPI40626",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 412-073-800-115A -> N.A.3"
    },
    {
        "id": "TMPI39784",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 412-073-800-115A -> N.A.2"
    },
    {
        "id": "TMPI40455",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 412-073-800-115A -> N.A.1"
    },
    {
        "id": "TMPI43984",
        "parent": "TMPI39722",
        "text": "JUNGLE SURVIVAL KIT -> JSK-412 -> TW001"
    },
    {
        "id": "TMPI44144",
        "parent": "TMPI39722",
        "text": "INTEGRATED VALVE AND, FILTER ASSY -> 212-076-006-105 -> 0401"
    },
    {
        "id": "TMPI42224",
        "parent": "TMPI39722",
        "text": "ITT INDICATOR ASSY -> 212-075-067-105 -> 505"
    },
    {
        "id": "TMPI42615",
        "parent": "TMPI39869",
        "text": "CAP ASSY, RETENTION -> 412-010-171-101 -> A562"
    },
    {
        "id": "TMPI39380",
        "parent": "TMPI39722",
        "text": "EXHUST DUCT R/H  -> 212-061-202-010 -> UNK"
    },
    {
        "id": "TMPI39594",
        "parent": "TMPI39119",
        "text": "OUTER RING  -> 412-010-407-117 -> RE1508"
    },
    {
        "id": "TMPI43224",
        "parent": "TMPI39722",
        "text": "SMART CYCLE -> EMU-A-010-1 -> 0941"
    },
    {
        "id": "TMPI39796",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077P140B370 -> N/A"
    },
    {
        "id": "TMPI40450",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012H000X184 -> NA"
    },
    {
        "id": "TMPI42286",
        "parent": "TMPI39722",
        "text": "P3-FILTER ELEMENT -> 3059788-01 -> DAS-P3-005"
    },
    {
        "id": "TMPI40460",
        "parent": "TMPI39722",
        "text": "MASTER CAUTION PANEL -> 214-175-122-111 -> 0689190"
    },
    {
        "id": "TMPI40457",
        "parent": "TMPI39722",
        "text": "HOSE ASSY -> 70-061L000V370A -> NA"
    },
    {
        "id": "TMPI42550",
        "parent": "TMPI39722",
        "text": "INDICATOR , GAS PROD -> 212-075-037-101 -> 8604112"
    },
    {
        "id": "TMPI42892",
        "parent": "TMPI39722",
        "text": "INDICATOR , GAS PROD -> 212-075-037-101 -> 8103105"
    },
    {
        "id": "TMPI41605",
        "parent": "TMPI39731",
        "text": "OIL TO FUEL HEATER -> 10544E -> 2081"
    },
    {
        "id": "TMPI39602",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST  -> 20-057-8-84D -> 4  EA"
    },
    {
        "id": "TMPI40245",
        "parent": "TMPI39722",
        "text": "POST WINDOW R/H -> 205-285-012 -> 2078"
    },
    {
        "id": "TMPI39808",
        "parent": "TMPI39722",
        "text": "HF COUPLER -> 064-1017-00 -> R4462"
    },
    {
        "id": "TMPI40021",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-061F180F110 -> NSN"
    },
    {
        "id": "TMPI40022",
        "parent": "TMPI39131",
        "text": "PLB BATTERY PACK -> A0696Y -> 137998"
    },
    {
        "id": "TMPI40638",
        "parent": "TMPI40580",
        "text": "PLB BATTERY PACK -> A0696Y -> N/A"
    },
    {
        "id": "TMPI40690",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 412-061-610-105 -> N/A"
    },
    {
        "id": "TMPI40223",
        "parent": "TMPI39722",
        "text": "HUB ASSY,TAIL ROTOR -> 212-011-701-125 -> HB771"
    },
    {
        "id": "TMPI42616",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE -> 412-010-170-105 -> A4210"
    },
    {
        "id": "TMPI42617",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE -> 412-010-170-105 -> A4208"
    },
    {
        "id": "TMPI42618",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE -> 412-010-170-105 -> A4207"
    },
    {
        "id": "TMPI42619",
        "parent": "TMPI39869",
        "text": "DAMPER BRIDGE -> 412-010-170-105 -> A4201"
    },
    {
        "id": "TMPI42620",
        "parent": "TMPI39869",
        "text": "UPPER CONE SEAT -> 412-010-186-103 -> A-1088"
    },
    {
        "id": "TMPI42364",
        "parent": "TMPI39265",
        "text": "DRIVE LINK ASSY -> 412-010-405-111 -> MJ000076"
    },
    {
        "id": "TMPI40025",
        "parent": "TMPI39722",
        "text": "LIGHT ASSY -> 212-075-139-001 -> 17541E"
    },
    {
        "id": "TMPI40026",
        "parent": "TMPI39722",
        "text": "PITCH LINK TUBE, UPP -> 412-010-425-113 -> US2288"
    },
    {
        "id": "TMPI40645",
        "parent": "TMPI39722",
        "text": "PITCH LINK TUBE, UPP -> 412-010-425-113 -> US1322"
    },
    {
        "id": "TMPI39196",
        "parent": "TMPI39119",
        "text": "SUPPORT ASSY -> 412-010-453-105 -> RE1683"
    },
    {
        "id": "TMPI39815",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-119 -> F-0634"
    },
    {
        "id": "TMPI40714",
        "parent": "TMPI39722",
        "text": "FLOAT BAG ASSY -> 412-050-013-119 -> F-0652"
    },
    {
        "id": "TMPI42621",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA"
    },
    {
        "id": "TMPI42622",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.1"
    },
    {
        "id": "TMPI42623",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.2"
    },
    {
        "id": "TMPI42624",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.3"
    },
    {
        "id": "TMPI42625",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.4"
    },
    {
        "id": "TMPI42626",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.5"
    },
    {
        "id": "TMPI42627",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.6"
    },
    {
        "id": "TMPI42628",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> MS-21250-H05-006 -> NA.7"
    },
    {
        "id": "TMPI40256",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 156001-10D0320 -> NA"
    },
    {
        "id": "TMPI39615",
        "parent": "TMPI39119",
        "text": "BOLT, SWASHPLATE -> 204-011-463-105 -> PB18911"
    },
    {
        "id": "TMPI40650",
        "parent": "TMPI39119",
        "text": "BOLT, SWASHPLATE -> 204-011-463-105 -> PB18909"
    },
    {
        "id": "TMPI40476",
        "parent": "TMPI39722",
        "text": "ACTUATOR LINEAR -> 4012373-913 -> 81012270"
    },
    {
        "id": "TMPI40037",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061F000Y370A -> NA"
    },
    {
        "id": "TMPI39619",
        "parent": "TMPI39722",
        "text": "AFT CROSS TUBE ASSY -> 412-321-304 -> 824"
    },
    {
        "id": "TMPI39819",
        "parent": "TMPI39722",
        "text": "COMBINING GEARBOX -> 3024780 -> CP-GB 1555"
    },
    {
        "id": "TMPI39820",
        "parent": "TMPI39722",
        "text": "TRIM COMPENSATOR -> 3030083 -> 8L003"
    },
    {
        "id": "TMPI40261",
        "parent": "TMPI39722",
        "text": "ADF CONTROL -> 622-6522-008 -> 2506"
    },
    {
        "id": "TMPI40262",
        "parent": "TMPI39722",
        "text": "ADF CONTROL -> 622-6522-008 -> 5085"
    },
    {
        "id": "TMPI39200",
        "parent": "TMPI40415",
        "text": "PLANETARY SPIDER GEAR -> 204-040-785-003 -> HT 28125"
    },
    {
        "id": "TMPI39821",
        "parent": "TMPI39722",
        "text": "GRIP ASSY -> 205-001-046-103 -> NSN1"
    },
    {
        "id": "TMPI40264",
        "parent": "TMPI39722",
        "text": "GRIP ASSY -> 205-001-046-103 -> NSN"
    },
    {
        "id": "TMPI40265",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE  -> 209-062-509-009 -> NA"
    },
    {
        "id": "TMPI42629",
        "parent": "TMPI39869",
        "text": "FITTING -> 412-010-111-103 -> A-6203"
    },
    {
        "id": "TMPI42630",
        "parent": "TMPI39869",
        "text": "FITTING -> 412-010-111-103 -> A-6200"
    },
    {
        "id": "TMPI42631",
        "parent": "TMPI39869",
        "text": "FITTING -> 412-010-111-103 -> A-6201"
    },
    {
        "id": "TMPI42632",
        "parent": "TMPI39869",
        "text": "FITTING -> 412-010-111-103 -> A-6202"
    },
    {
        "id": "TMPI39202",
        "parent": "TMPI39722",
        "text": "HANGER ASSY - T/R -> 212-040-600-005 -> A1319"
    },
    {
        "id": "TMPI39825",
        "parent": "TMPI39722",
        "text": "HANGER ASSY - T/R -> 212-040-600-005 -> A1847"
    },
    {
        "id": "TMPI39624",
        "parent": "TMPI39722",
        "text": "HANGER ASSY - T/R -> 212-040-600-005 -> A1255"
    },
    {
        "id": "TMPI40485",
        "parent": "TMPI39722",
        "text": "HANGER ASSY - T/R -> 212-040-600-005 -> A1573"
    },
    {
        "id": "TMPI39826",
        "parent": "TMPI39936",
        "text": "COMPRESSOR TURBINE DISK -> 3024211 -> 4T482"
    },
    {
        "id": "TMPI41587",
        "parent": "TMPI39731",
        "text": "COMPRESSOR TURBINE DISK -> 3024211 -> A0011145X"
    },
    {
        "id": "TMPI40046",
        "parent": "TMPI39722",
        "text": "CARGO MIROR (CONVEX) -> D212-580-041 -> B140825"
    },
    {
        "id": "TMPI44724",
        "parent": "TMPI39722",
        "text": "ITT INDICATOR ASSY -> 212-075-067-109 -> 213"
    },
    {
        "id": "TMPI41424",
        "parent": "TMPI39722",
        "text": "FUEL QTY. INDICATOR -> 412-375-001-101 -> 8506105"
    },
    {
        "id": "TMPI40489",
        "parent": "TMPI39722",
        "text": "CONTROL HEAD, HVM -> 1209-3300-FA -> 00127"
    },
    {
        "id": "TMPI39406",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-072M000C144 -> N.A.2"
    },
    {
        "id": "TMPI39627",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-072M000C144 -> NSN.1"
    },
    {
        "id": "TMPI42883",
        "parent": "TMPI39722",
        "text": "GPS GA-35 ANTENNA -> 013-00235-00 -> 181684"
    },
    {
        "id": "TMPI39830",
        "parent": "TMPI39722",
        "text": "NAV. ANTENNA COUPLER -> DMH21-1 -> 49655"
    },
    {
        "id": "TMPI44704",
        "parent": "TMPI39722",
        "text": "COUPLING -> 204-040-604-005 -> A-FS56715"
    },
    {
        "id": "TMPI40275",
        "parent": "TMPI39722",
        "text": "COUPLING -> 204-040-604-005 -> A-13903"
    },
    {
        "id": "TMPI40669",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE  -> 70-012H000Y164 -> NSN1"
    },
    {
        "id": "TMPI39208",
        "parent": "TMPI39722",
        "text": "NAV CONTROL -> 622-6521-015 -> 6328"
    },
    {
        "id": "TMPI40280",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 156003-10D0334 -> NA."
    },
    {
        "id": "TMPI40640",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077P267W184 -> N/A"
    },
    {
        "id": "TMPI42887",
        "parent": "TMPI39722",
        "text": "SHAFT ASSY, TAIL ROTOR -> 204-040-620-011 -> A-14956"
    },
    {
        "id": "TMPI42885",
        "parent": "TMPI39722",
        "text": "SHAFT ASSY, TAIL ROTOR -> 204-040-620-011 -> A-15195"
    },
    {
        "id": "TMPI42886",
        "parent": "TMPI39722",
        "text": "SHAFT ASSY, TAIL ROTOR -> 204-040-620-011 -> A-3895"
    },
    {
        "id": "TMPI42884",
        "parent": "TMPI39722",
        "text": "SHAFT ASSY, TAIL ROTOR -> 204-040-620-011 -> A-3835"
    },
    {
        "id": "TMPI41644",
        "parent": "TMPI39936",
        "text": "FLOW DIVIDER -> 3019906 -> 15582"
    },
    {
        "id": "TMPI41604",
        "parent": "TMPI39731",
        "text": "FLOW DIVIDER -> 3019906 -> 11195"
    },
    {
        "id": "TMPI41590",
        "parent": "TMPI39731",
        "text": "A.F.C.U. -> 3244735-14 -> A84279"
    },
    {
        "id": "TMPI41745",
        "parent": "TMPI39722",
        "text": "HOURMETER -> 100690 -> N.A"
    },
    {
        "id": "TMPI41593",
        "parent": "TMPI39731",
        "text": "IMPELLER -> 3035883 -> 7C501"
    },
    {
        "id": "TMPI42880",
        "parent": "TMPI39722",
        "text": "VALVE -> AV24B1119B -> T73806M"
    },
    {
        "id": "TMPI42879",
        "parent": "TMPI39722",
        "text": "VALVE -> AV24B1119B -> AA402595M"
    },
    {
        "id": "TMPI42126",
        "parent": "TMPI39722",
        "text": "LIGHT ASSY -> 90-004-1 -> N.A."
    },
    {
        "id": "TMPI42549",
        "parent": "TMPI39722",
        "text": "SMOKE DETECTOR -> 30-231-9 -> 2177"
    },
    {
        "id": "TMPI42504",
        "parent": "TMPI39722",
        "text": "TUBE ASSY -> 212-060-644-001 -> NA"
    },
    {
        "id": "TMPI41868",
        "parent": "TMPI39722",
        "text": "LUBRICATION -> 412 OIL/LUB -> NA"
    },
    {
        "id": "TMPI39833",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-061F000D207A -> N/A"
    },
    {
        "id": "TMPI42633",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1378"
    },
    {
        "id": "TMPI42634",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1369"
    },
    {
        "id": "TMPI42635",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1362"
    },
    {
        "id": "TMPI42636",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1332"
    },
    {
        "id": "TMPI42637",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1329"
    },
    {
        "id": "TMPI42638",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1322"
    },
    {
        "id": "TMPI42639",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> AX-1320"
    },
    {
        "id": "TMPI42640",
        "parent": "TMPI39869",
        "text": "DRIVE PIN -> 412-010-166-101 -> A-7189"
    },
    {
        "id": "TMPI42384",
        "parent": "TMPI39722",
        "text": "RATE GYRO  -> 214-075-244-001 -> 31165"
    },
    {
        "id": "TMPI39654",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-061H000V175A -> NA.1"
    },
    {
        "id": "TMPI39842",
        "parent": "TMPI39722",
        "text": "INDICATOR, WX RADAR  -> 4001670-2511 -> 2449"
    },
    {
        "id": "TMPI42641",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA"
    },
    {
        "id": "TMPI42642",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA11"
    },
    {
        "id": "TMPI42643",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA3"
    },
    {
        "id": "TMPI42644",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA15"
    },
    {
        "id": "TMPI42645",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA14"
    },
    {
        "id": "TMPI42646",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA13"
    },
    {
        "id": "TMPI42647",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA12"
    },
    {
        "id": "TMPI42648",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA10"
    },
    {
        "id": "TMPI42649",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA9"
    },
    {
        "id": "TMPI42650",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA8"
    },
    {
        "id": "TMPI42651",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA7"
    },
    {
        "id": "TMPI42652",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA6"
    },
    {
        "id": "TMPI42653",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA5"
    },
    {
        "id": "TMPI42654",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA4"
    },
    {
        "id": "TMPI42655",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA2"
    },
    {
        "id": "TMPI42656",
        "parent": "TMPI39869",
        "text": "BRACKET BOLT -> EWB0420D-7-36 -> NA1"
    },
    {
        "id": "TMPI40069",
        "parent": "TMPI39722",
        "text": "ROTOR BRAKE QUILL ASSY -> 412-040-123-101 -> A760"
    },
    {
        "id": "TMPI41784",
        "parent": "TMPI39722",
        "text": "SEARCHLIGHT -> G-6250-4 -> 68649"
    },
    {
        "id": "TMPI42882",
        "parent": "TMPI39722",
        "text": "DME INDICATOR -> 622-6524-003 -> 5935"
    },
    {
        "id": "TMPI39423",
        "parent": "TMPI39722",
        "text": "DME INDICATOR -> 622-6524-003 -> 3718"
    },
    {
        "id": "TMPI39645",
        "parent": "TMPI39722",
        "text": "HELIPILOT COMPUTER  -> 4025008-918 -> 90012329"
    },
    {
        "id": "TMPI40676",
        "parent": "TMPI39722",
        "text": "HELIPILOT COMPUTER  -> 4025008-918 -> 81071212"
    },
    {
        "id": "TMPI40508",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 156005-6D0214 -> NA"
    },
    {
        "id": "TMPI43806",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 1-09-052-1741"
    },
    {
        "id": "TMPI43805",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 1253-1741"
    },
    {
        "id": "TMPI43818",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 1112-1761"
    },
    {
        "id": "TMPI43810",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 5-97-508-1161"
    },
    {
        "id": "TMPI43809",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 5-97-472-1161"
    },
    {
        "id": "TMPI43808",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 4-09-874-1741"
    },
    {
        "id": "TMPI43807",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 4-09-869-1741"
    },
    {
        "id": "TMPI43804",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (CREW) -> S-7200-2 -> 1111-1761"
    },
    {
        "id": "TMPI40086",
        "parent": "TMPI39722",
        "text": "FWD CROSSTUBE -> 212-321-103 -> A0646"
    },
    {
        "id": "TMPI39432",
        "parent": "TMPI39722",
        "text": "FLOAT STEP, L/H -> 412-300-201 -> 489"
    },
    {
        "id": "TMPI39653",
        "parent": "TMPI39722",
        "text": "FLOAT STEP, R/H -> 412-300-202 -> 515"
    },
    {
        "id": "TMPI39232",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-034M251B140A -> N/A"
    },
    {
        "id": "TMPI39855",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009F000Y300A -> NA"
    },
    {
        "id": "TMPI39856",
        "parent": "TMPI39722",
        "text": "EXHAUST DUCT L/H -> 212-061-202-009 -> N/A"
    },
    {
        "id": "TMPI39658",
        "parent": "TMPI39722",
        "text": "FUEL TRANSMITTER -> 130-020-1 -> 8351315"
    },
    {
        "id": "TMPI40518",
        "parent": "TMPI39722",
        "text": "PITCH LINK TUBE, LOW -> 412-010-425-129 -> US2165"
    },
    {
        "id": "TMPI39236",
        "parent": "TMPI39722",
        "text": "PITCH LINK TUBE, LOW -> 412-010-425-129 -> US2174"
    },
    {
        "id": "TMPI40311",
        "parent": "TMPI39936",
        "text": "FUEL PUMP -> 3031857 -> PE8015"
    },
    {
        "id": "TMPI40312",
        "parent": "TMPI39722",
        "text": "MOTOR CONVERTER -> 204-070-907-101 -> 00762"
    },
    {
        "id": "TMPI40552",
        "parent": "TMPI39722",
        "text": "STARTER GENERATOR -> 23046-020 -> 97105"
    },
    {
        "id": "TMPI40096",
        "parent": "TMPI39722",
        "text": "RMI ADAPTER -> 622-1032-001 -> 1548"
    },
    {
        "id": "TMPI41704",
        "parent": "TMPI39722",
        "text": "GPS, GNS 430W -> 011-01060-00 -> 23422084"
    },
    {
        "id": "TMPI39409",
        "parent": "TMPI39722",
        "text": "TRANSMISSION HOSE -> 70-061L275W210A -> NA"
    },
    {
        "id": "TMPI39869",
        "parent": "TMPI39722",
        "text": "HUB ASSY, MAIN ROTOR -> 412-010-100-151 -> A289"
    },
    {
        "id": "TMPI39242",
        "parent": "TMPI40448",
        "text": "BATTERY KIT, DK -> 810-2008/K -> N/A"
    },
    {
        "id": "TMPI42895",
        "parent": "TMPI39722",
        "text": "MSPU -> 1209-3100-FA -> 00129"
    },
    {
        "id": "TMPI39447",
        "parent": "TMPI39265",
        "text": "LINK ASSY, SW.PLATE -> 412-010-406-115 -> A-5161"
    },
    {
        "id": "TMPI39448",
        "parent": "TMPI39265",
        "text": "LINK ASSY, SW.PLATE -> 412-010-406-115 -> A-005427"
    },
    {
        "id": "TMPI39721",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061F000X146A -> NA"
    },
    {
        "id": "TMPI39665",
        "parent": "TMPI39722",
        "text": "HYD.TRANSMT.PRESS. -> 50579 -> 3485A"
    },
    {
        "id": "TMPI39666",
        "parent": "TMPI39119",
        "text": "GIMBAL RING -> 204-010-404-101 -> RE2183"
    },
    {
        "id": "TMPI39667",
        "parent": "TMPI39936",
        "text": "M.F.C.U. -> 3244736-8 -> B17048"
    },
    {
        "id": "TMPI40522",
        "parent": "TMPI39731",
        "text": "M.F.C.U. -> 3244736-8 -> A86913"
    },
    {
        "id": "TMPI39245",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012H000Y150 -> NSN"
    },
    {
        "id": "TMPI40523",
        "parent": "TMPI39936",
        "text": "A.F.C.U. -> 3244735-16 -> C15580"
    },
    {
        "id": "TMPI40451",
        "parent": "TMPI40156",
        "text": "SQUIB CARTRIDGE,ENG.FIREX -> 13083-5 -> NSN1."
    },
    {
        "id": "TMPI39179",
        "parent": "TMPI39982",
        "text": "SQUIB CARTRIDGE,ENG.FIREX -> 13083-5 -> NA3"
    },
    {
        "id": "TMPI43247",
        "parent": "TMPI39982",
        "text": "SQUIB CARTRIDGE,ENG.FIREX -> 13083-5 -> NA2"
    },
    {
        "id": "TMPI40524",
        "parent": "TMPI39722",
        "text": "HF CONTR. KCU951 -> 064-1016-00 -> 2280"
    },
    {
        "id": "TMPI40702",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061F000Y166A -> N/A"
    },
    {
        "id": "TMPI39248",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061F000Y166A -> NSN"
    },
    {
        "id": "TMPI43815",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (PAX) -> S-9400 -> 1216-1761"
    },
    {
        "id": "TMPI43813",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (PAX) -> S-9400 -> 662-1741"
    },
    {
        "id": "TMPI43817",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (PAX) -> S-9400 -> 11-95-711"
    },
    {
        "id": "TMPI43814",
        "parent": "TMPI39722",
        "text": "LIFE VESTS (PAX) -> S-9400 -> 665-1741"
    },
    {
        "id": "TMPI39453",
        "parent": "TMPI39722",
        "text": "SKID TUBE, LH -> 412-324-003 -> 9701"
    },
    {
        "id": "TMPI39456",
        "parent": "TMPI39447",
        "text": "ROD END BEARING -> 412-310-400-103 -> NH33894"
    },
    {
        "id": "TMPI40528",
        "parent": "TMPI39448",
        "text": "ROD END BEARING -> 412-310-400-103 -> NH33966"
    },
    {
        "id": "TMPI39255",
        "parent": "TMPI39722",
        "text": "ALTITUDE SENSOR -> 4030182-901 -> 92011433"
    },
    {
        "id": "TMPI40115",
        "parent": "TMPI39722",
        "text": "LED PULSE LIGHT KIT -> D212-580-043 -> B149487"
    },
    {
        "id": "TMPI39257",
        "parent": "TMPI39722",
        "text": "AIRCRAFT BATTERY -> G6381E -> G03203523"
    },
    {
        "id": "TMPI40715",
        "parent": "TMPI39722",
        "text": "NUT -> 212-040-631-101 -> NA"
    },
    {
        "id": "TMPI40533",
        "parent": "TMPI39265",
        "text": "COLLECTIVE SLEEVE -> 204-011-408-107 -> MWFS-709"
    },
    {
        "id": "TMPI42657",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL5"
    },
    {
        "id": "TMPI42658",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL8"
    },
    {
        "id": "TMPI42659",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL7"
    },
    {
        "id": "TMPI42660",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL6"
    },
    {
        "id": "TMPI42661",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL4"
    },
    {
        "id": "TMPI42662",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL3"
    },
    {
        "id": "TMPI42663",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL2"
    },
    {
        "id": "TMPI42664",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6606-H46 -> NIL1"
    },
    {
        "id": "TMPI42665",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A3"
    },
    {
        "id": "TMPI42666",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A2"
    },
    {
        "id": "TMPI42667",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A1"
    },
    {
        "id": "TMPI42668",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A7"
    },
    {
        "id": "TMPI42669",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A6"
    },
    {
        "id": "TMPI42670",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A5"
    },
    {
        "id": "TMPI42671",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A4"
    },
    {
        "id": "TMPI42672",
        "parent": "TMPI39869",
        "text": "BOLT, M/R HUB -> NAS-6608-D50 -> N/A"
    },
    {
        "id": "TMPI40345",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> 70-055X000D130 -> N.A."
    },
    {
        "id": "TMPI39684",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> 70-055X000D130 -> NSN1"
    },
    {
        "id": "TMPI39889",
        "parent": "TMPI39722",
        "text": "LINK ASSY -> 212-010-711-003 -> NHFS15514"
    },
    {
        "id": "TMPI39890",
        "parent": "TMPI39722",
        "text": "LINK ASSY -> 212-010-711-003 -> NHFS15550"
    },
    {
        "id": "TMPI39265",
        "parent": "TMPI39722",
        "text": "HUB AND SLEEVE ASSY -> 412-010-401-113 -> A-869"
    },
    {
        "id": "TMPI42881",
        "parent": "TMPI39722",
        "text": "PANEL -> 412-075-715-101 -> CE510"
    },
    {
        "id": "TMPI40348",
        "parent": "TMPI39722",
        "text": "BOLT,HYD.CYL-LW.SUP  -> 212-001-323-001 -> DI18030"
    },
    {
        "id": "TMPI40347",
        "parent": "TMPI39722",
        "text": "BOLT,HYD.CYL-LW.SUP  -> 212-001-323-001 -> DI18158"
    },
    {
        "id": "TMPI39267",
        "parent": "TMPI39722",
        "text": "BOLT,HYD.CYL-LW.SUP  -> 212-001-323-001 -> DI18214"
    },
    {
        "id": "TMPI42106",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE -> 70-012J075W200 -> N.A."
    },
    {
        "id": "TMPI42129",
        "parent": "TMPI39722",
        "text": "FUEL HOSE  -> 70-077P288W294 -> N.A."
    },
    {
        "id": "TMPI42105",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-061H000V300A -> N/A"
    },
    {
        "id": "TMPI39686",
        "parent": "TMPI39265",
        "text": "DRIVE HUB ASSY -> 412-010-445-105 -> A-1208"
    },
    {
        "id": "TMPI40352",
        "parent": "TMPI39722",
        "text": "RELAY -> 214-175-144-101 -> AP6537"
    },
    {
        "id": "TMPI39482",
        "parent": "TMPI39722",
        "text": "RELAY -> 214-175-144-101 -> AP5744"
    },
    {
        "id": "TMPI39692",
        "parent": "TMPI39722",
        "text": "HELIPILOT CONTROLLER -> 7000299-901 -> 90021312"
    },
    {
        "id": "TMPI44025",
        "parent": "TMPI39722",
        "text": "90 GAL AUX TANK -> 412-706-007-106A -> F-130"
    },
    {
        "id": "TMPI43046",
        "parent": "TMPI39722",
        "text": "HYDRAULIC FILTER -> 205-076-034-007 -> DAS-H-026"
    },
    {
        "id": "TMPI39275",
        "parent": "TMPI39722",
        "text": "HYDRAULIC FILTER -> 205-076-034-007 -> DAS-H-027"
    },
    {
        "id": "TMPI40545",
        "parent": "TMPI39722",
        "text": "HYDRAULIC FILTER -> 205-076-034-007 -> H.DAS.003"
    },
    {
        "id": "TMPI40354",
        "parent": "TMPI39722",
        "text": "HYDRAULIC FILTER -> 205-076-034-007 -> H-DAS-024"
    },
    {
        "id": "TMPI39694",
        "parent": "TMPI40400",
        "text": "BOLT, CONTRL SYST  -> 20-057-6-52D -> 6  EA"
    },
    {
        "id": "TMPI40356",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-055W000D214 -> NSN.2"
    },
    {
        "id": "TMPI39276",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-055W000D214 -> NSN1"
    },
    {
        "id": "TMPI39489",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-072M000C222 -> NA."
    },
    {
        "id": "TMPI39488",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE -> 70-072M000C222 -> N.A."
    },
    {
        "id": "TMPI39277",
        "parent": "TMPI39722",
        "text": "INDICATOR , ATTITUDE -> 111303-4 -> 1095"
    },
    {
        "id": "TMPI40358",
        "parent": "TMPI39722",
        "text": "EXCITER, IGNITER -> 3035889 -> NNA12200066"
    },
    {
        "id": "TMPI40548",
        "parent": "TMPI39936",
        "text": "BLEED VALVE -> 3039009 -> 14A194"
    },
    {
        "id": "TMPI41724",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-061K000C240 -> N.A."
    },
    {
        "id": "TMPI40359",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE  -> 70-012F000D130 -> NA."
    },
    {
        "id": "TMPI39905",
        "parent": "TMPI39722",
        "text": "HYDRAULIC HOSE  -> 70-012F000X204 -> N.A."
    },
    {
        "id": "TMPI39696",
        "parent": "TMPI39722",
        "text": "BATTERY NICKEL -> 39563-001 -> 9901999"
    },
    {
        "id": "TMPI40147",
        "parent": "TMPI39722",
        "text": "CONTROL UNIT -> 51539-002N -> 7478"
    },
    {
        "id": "TMPI40360",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE  -> 70-031C110-000 -> N/A"
    },
    {
        "id": "TMPI42896",
        "parent": "TMPI39722",
        "text": "ACTUATOR LINEAR -> 4012373-905 -> 80011201"
    },
    {
        "id": "TMPI43225",
        "parent": "TMPI39722",
        "text": "COUPLING -> 204-040-604-005S -> BHFS033940"
    },
    {
        "id": "TMPI39283",
        "parent": "TMPI39722",
        "text": "COVER ASSY -> 205-070-792-045 -> N/A"
    },
    {
        "id": "TMPI40056",
        "parent": "TMPI39722",
        "text": "POWER PLANT HOSE -> 70-009G000Y324A -> NA"
    },
    {
        "id": "TMPI42673",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-217-101 -> RE311"
    },
    {
        "id": "TMPI41747",
        "parent": "TMPI39722",
        "text": "STARTER GENERATOR -> 209-060-221-001 -> 13809"
    },
    {
        "id": "TMPI44464",
        "parent": "TMPI39722",
        "text": "ACTUATOR -> 209-062-214-001 -> 1729"
    },
    {
        "id": "TMPI39909",
        "parent": "TMPI39722",
        "text": "ACTUATOR -> 209-062-214-001 -> U0739"
    },
    {
        "id": "TMPI40150",
        "parent": "TMPI39722",
        "text": "ANTI COLL LIGHT -> 70285-01 -> R28MS01273"
    },
    {
        "id": "TMPI41725",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077L000R112 -> N.A."
    },
    {
        "id": "TMPI40553",
        "parent": "TMPI39722",
        "text": "THREE AXIS GYRO -> 4020936-903 -> 92031080"
    },
    {
        "id": "TMPI39911",
        "parent": "TMPI39722",
        "text": "THREE AXIS GYRO -> 4020936-903 -> 92021073"
    },
    {
        "id": "TMPI44264",
        "parent": "TMPI39722",
        "text": "DUAL TORQ. INDICATOR -> 412-075-008-111 -> 527"
    },
    {
        "id": "TMPI42674",
        "parent": "TMPI39869",
        "text": "YOKE ASSY -> 412-010-101-129 -> A-3566"
    },
    {
        "id": "TMPI42675",
        "parent": "TMPI39869",
        "text": "YOKE ASSY -> 412-010-101-129 -> A-3573"
    },
    {
        "id": "TMPI40888",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> AE-2463637K0484 -> N/A."
    },
    {
        "id": "TMPI40887",
        "parent": "TMPI39722",
        "text": "FLOAT HOSE  -> AE-2463637K0484 -> N/A1"
    },
    {
        "id": "TMPI39498",
        "parent": "TMPI39722",
        "text": "LINK ASSY -> 212-011-710-001 -> NHFS11332"
    },
    {
        "id": "TMPI41884",
        "parent": "TMPI39722",
        "text": "LINK ASSY -> 212-011-710-001 -> NHFS11430"
    },
    {
        "id": "TMPI42676",
        "parent": "TMPI39869",
        "text": "PITCH HORN ASSY -> 412-010-149-111 -> A-5813"
    },
    {
        "id": "TMPI42677",
        "parent": "TMPI39869",
        "text": "PITCH HORN ASSY -> 412-010-149-111 -> A-5824"
    },
    {
        "id": "TMPI39287",
        "parent": "TMPI39869",
        "text": "PITCH HORN ASSY -> 412-010-149-111 -> A-5799"
    },
    {
        "id": "TMPI41304",
        "parent": "TMPI39869",
        "text": "PITCH HORN ASSY -> 412-010-149-111 -> A4348"
    },
    {
        "id": "TMPI42678",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9378"
    },
    {
        "id": "TMPI42679",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9237"
    },
    {
        "id": "TMPI42680",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9240"
    },
    {
        "id": "TMPI42681",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9376"
    },
    {
        "id": "TMPI42682",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9260"
    },
    {
        "id": "TMPI42683",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9379"
    },
    {
        "id": "TMPI42684",
        "parent": "TMPI39869",
        "text": "ARM ASSY -> 412-010-263-101 -> A-9380"
    },
    {
        "id": "TMPI42685",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-101 -> A-7301"
    },
    {
        "id": "TMPI42686",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-101 -> A-7302"
    },
    {
        "id": "TMPI42687",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-101 -> A-7269"
    },
    {
        "id": "TMPI42688",
        "parent": "TMPI39869",
        "text": "BRACKET ASSY -> 412-010-264-101 -> A-7270"
    },
    {
        "id": "TMPI40153",
        "parent": "TMPI39718",
        "text": "MAST TUBE -> 412-040-101-127 -> BH251650"
    },
    {
        "id": "TMPI42890",
        "parent": "TMPI39722",
        "text": "BEARING,UNIVERSAL  -> 412-076-620-101 -> RE636"
    },
    {
        "id": "TMPI42889",
        "parent": "TMPI39722",
        "text": "BEARING,UNIVERSAL  -> 412-076-620-101 -> RE1474"
    },
    {
        "id": "TMPI39503",
        "parent": "TMPI39722",
        "text": "STANDBY ATTITUDE INDICATOR -> 222-375-033-103 -> 1091013"
    },
    {
        "id": "TMPI41764",
        "parent": "TMPI39722",
        "text": "RELIEF VALVE -> 206-073-926-105 -> 1077"
    },
    {
        "id": "TMPI42127",
        "parent": "TMPI39722",
        "text": "FUEL HOSE -> 70-077M177B135 -> N.A."
    },
    {
        "id": "TMPI40156",
        "parent": "TMPI39722",
        "text": "BOTTLE, ENGINE FIREX -> 209-062-908-105 -> 30599B1"
    },
    {
        "id": "TMPI40374",
        "parent": "TMPI39819",
        "text": "TORQUE CONTROL UNIT -> 3244706-6 -> A94685"
    },
    {
        "id": "TMPI40753",
        "parent": "TMPI39936",
        "text": "2nd STAGE COMPRESSOR DISK -> 3018312 -> 2T684"
    },
    {
        "id": "TMPI41585",
        "parent": "TMPI39731",
        "text": "2nd STAGE COMPRESSOR DISK -> 3018312 -> A001W3F3"
    },
    {
        "id": "TMPI41586",
        "parent": "TMPI39731",
        "text": "3rd STAGE COMPRESSOR DISK -> 3017713 -> 1W804"
    },
    {
        "id": "TMPI40375",
        "parent": "TMPI39936",
        "text": "3rd STAGE COMPRESSOR DISK -> 3017713 -> 2T538"
    },
    {
        "id": "TMPI39708",
        "parent": "TMPI39936",
        "text": "POWER TURBINE DISK -> 3022312 -> 5T069"
    },
    {
        "id": "TMPI41588",
        "parent": "TMPI39731",
        "text": "POWER TURBINE DISK -> 3022312 -> 5T089"
    },
    {
        "id": "TMPI42877",
        "parent": "TMPI39722",
        "text": "TRANSDUCER -> 412-074-101-101 -> 2933"
    },
    {
        "id": "TMPI42876",
        "parent": "TMPI39722",
        "text": "TRANSDUCER -> 412-074-101-101 -> 1786-93"
    },
    {
        "id": "TMPI42891",
        "parent": "TMPI39722",
        "text": "EXHAUST EJECTOR L/H -> 212-061-201-011 -> A-673"
    }
]