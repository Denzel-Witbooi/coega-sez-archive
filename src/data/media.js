// ─── CONTENT CONFIG ──────────────────────────────────────────────────────────
// Set isPublic to false to immediately disable all media and show the holding
// page. One value change + one redeploy takes the content offline in minutes.

export const CONTENT_CONFIG = {
  isPublic: true,
  organisation: "Coega Development Corporation",
  notice: "All drone imagery and video © Coega Development Corporation. Used for portfolio demonstration purposes only. Not monetised.",
  takedownContact: "dwitbooi41@gmail.com", // add your email if you want to show a contact line
}

const CLOUD = "https://res.cloudinary.com/dpluujmr3/image/upload";
const BASE = `${CLOUD}/coega/images`;

// Cloudinary URL helpers
export const thumb = (path) => `${CLOUD}/w_600,q_auto,f_auto/coega/images/${path}`;
export const full = (path) => `${CLOUD}/q_auto,f_auto/coega/images/${path}`;

// ─── VIDEOS ──────────────────────────────────────────────────────────────────

export const corporateVideos = [
  {
    id: "bOZTaeRtq9w",
    title: "Coega Special Economic Zone",
    category: "Corporate",
  },
  {
    id: "O9XDIyh9l4w",
    title: "OEC Oil Tank Farm Project – Zone 7 (Site Progress)",
    category: "Corporate",
  },
];

export const droneFootage = [
  { id: "R3iwWScJT1E", title: "Drone Footage Part 1" },
  { id: "ha7HAVWiIhk", title: "Drone Footage Part 2" },
  { id: "A3oGtF1_h3Q", title: "Drone Footage Part 3" },
  { id: "iijgiukULJU", title: "Drone Footage Part 4" },
];

// ─── FEATURED DRONE IMAGES ───────────────────────────────────────────────────

export const featuredImages = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  thumb: thumb(`Drone_image_${i + 1}.jpg`),
  full: full(`Drone_image_${i + 1}.jpg`),
  alt: `Coega SEZ Drone Image ${i + 1}`,
}));

// ─── ZONES ───────────────────────────────────────────────────────────────────

export const zones = [
  {
    id: "logistic-park",
    label: "Logistics Park",
    coverImage: thumb("Logistic_Park/DJI_0122.jpg"),
    investors: [
      {
        name: "General",
        images: [
          "Logistic_Park/DJI_0122.jpg",
          "Logistic_Park/DJI_0123.jpg",
          "Logistic_Park/DJI_0124.jpg",
          "Logistic_Park/DJI_0133.jpg",
          "Logistic_Park/DJI_0134.jpg",
          "Logistic_Park/DJI_0150.jpg",
          "Logistic_Park/DJI_0151.jpg",
          "Logistic_Park/DJI_0159.jpg",
          "Logistic_Park/DJI_0160.jpg",
          "Logistic_Park/DJI_0162.jpg",
        ],
      },
      {
        name: "Benteler",
        images: [
          "Logistic_Park/Benteler/DJI_0140.jpg",
          "Logistic_Park/Benteler/DJI_0142.jpg",
          "Logistic_Park/Benteler/DJI_0143.jpg",
        ],
      },
      {
        name: "Faurecia",
        images: [
          "Logistic_Park/Faurecia/DJI_0129.jpg",
          "Logistic_Park/Faurecia/DJI_0130.jpg",
          "Logistic_Park/Faurecia/DJI_0131.jpg",
          "Logistic_Park/Faurecia/DJI_0147.jpg",
        ],
      },
      {
        name: "Grupo Antolin",
        images: [
          "Logistic_Park/Grupo_Antolin/DJI_0141.jpg",
          "Logistic_Park/Grupo_Antolin/DJI_0144.jpg",
          "Logistic_Park/Grupo_Antolin/DJI_0145.jpg",
          "Logistic_Park/Grupo_Antolin/DJI_0146.jpg",
        ],
      },
      {
        name: "ITPASA",
        images: [
          "Logistic_Park/ITPASA/DJI_0136.jpg",
          "Logistic_Park/ITPASA/DJI_0152.jpg",
          "Logistic_Park/ITPASA/DJI_0153.jpg",
          "Logistic_Park/ITPASA/DJI_0154.jpg",
          "Logistic_Park/ITPASA/DJI_0158.jpg",
        ],
      },
      {
        name: "MSC",
        images: [
          "Logistic_Park/MSC/DJI_0148.jpg",
          "Logistic_Park/MSC/DJI_0149.jpg",
          "Logistic_Park/MSC/DJI_0161.jpg",
        ],
      },
      {
        name: "Office",
        images: [
          "Logistic_Park/Office/DJI_0126.jpg",
          "Logistic_Park/Office/DJI_0127.jpg",
          "Logistic_Park/Office/DJI_0156.jpg",
          "Logistic_Park/Office/DJI_0157.jpg",
        ],
      },
      {
        name: "Rehau",
        images: [
          "Logistic_Park/Rehau/DJI_0135.jpg",
          "Logistic_Park/Rehau/DJI_0137.jpg",
          "Logistic_Park/Rehau/DJI_0138.jpg",
          "Logistic_Park/Rehau/DJI_0139.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-1",
    label: "Zone 1",
    coverImage: thumb("Zone_1/CDC_Head_Office/DJI_0001.jpg"),
    investors: [
      {
        name: "APLI",
        images: [
          "Zone_1/APLI/DJI_0035.jpg",
          "Zone_1/APLI/DJI_0036.jpg",
          "Zone_1/APLI/DJI_0038.jpg",
        ],
      },
      {
        name: "APM Terminal",
        images: ["Zone_1/APM_Terminal/DJI_0032.jpg"],
      },
      {
        name: "BAIC",
        images: [
          "Zone_1/BAIC/DJI_0042.jpg",
          "Zone_1/BAIC/DJI_0043.jpg",
          "Zone_1/BAIC/DJI_0044.jpg",
          "Zone_1/BAIC/DJI_0045.jpg",
          "Zone_1/BAIC/DJI_0057.jpg",
          "Zone_1/BAIC/DJI_0058.jpg",
        ],
      },
      {
        name: "CCA",
        images: ["Zone_1/CCA/DJI_0013.jpg"],
      },
      {
        name: "Coega Head Office",
        images: [
          "Zone_1/CDC_Head_Office/DJI_0001.jpg",
          "Zone_1/CDC_Head_Office/DJI_0002.jpg",
          "Zone_1/CDC_Head_Office/DJI_0003.jpg",
          "Zone_1/CDC_Head_Office/DJI_0004.jpg",
          "Zone_1/CDC_Head_Office/DJI_0005.jpg",
          "Zone_1/CDC_Head_Office/DJI_0006.jpg",
          "Zone_1/CDC_Head_Office/DJI_0007.jpg",
          "Zone_1/CDC_Head_Office/DJI_0008.jpg",
          "Zone_1/CDC_Head_Office/DJI_0009.jpg",
          "Zone_1/CDC_Head_Office/DJI_0010.jpg",
        ],
      },
      {
        name: "DHL",
        images: [
          "Zone_1/DHL/DJI_0015.jpg",
          "Zone_1/DHL/DJI_0017.jpg",
          "Zone_1/DHL/DJI_0021.jpg",
          "Zone_1/DHL/DJI_0022.jpg",
        ],
      },
      {
        name: "Digistics",
        images: ["Zone_1/Digistics/DJI_0014.jpg"],
      },
      {
        name: "DSV",
        images: [
          "Zone_1/DSV/DJI_0023.jpg",
          "Zone_1/DSV/DJI_0024.jpg",
          "Zone_1/DSV/DJI_0025.jpg",
          "Zone_1/DSV/DJI_0026.jpg",
        ],
      },
      {
        name: "Famous Brands",
        images: [
          "Zone_1/Famous_brands/DJI_0028.jpg",
          "Zone_1/Famous_brands/DJI_0029.jpg",
          "Zone_1/Famous_brands/DJI_0030.jpg",
        ],
      },
      {
        name: "Isuzu",
        images: [
          "Zone_1/Isuzu/DJI_0039.jpg",
          "Zone_1/Isuzu/DJI_0040.jpg",
          "Zone_1/Isuzu/DJI_0041.jpg",
        ],
      },
      {
        name: "Lactalis",
        images: [
          "Zone_1/Lactalis/DJI_0018.jpg",
          "Zone_1/Lactalis/DJI_0019.jpg",
          "Zone_1/Lactalis/DJI_0020.jpg",
        ],
      },
      {
        name: "MSC",
        images: ["Zone_1/MSC/DJI_0027.jpg"],
      },
      {
        name: "NSC",
        images: [
          "Zone_1/NSC/DJI_0011.jpg",
          "Zone_1/NSC/DJI_0012.jpg",
        ],
      },
      {
        name: "PE Cold Storage",
        images: [
          "Zone_1/PE_Cold_Storage/DJI_0033.jpg",
          "Zone_1/PE_Cold_Storage/DJI_0034.jpg",
        ],
      },
      {
        name: "Vector Logistics",
        images: ["Zone_1/Vector_logistics/DJI_0031.jpg"],
      },
    ],
  },

  {
    id: "zone-2",
    label: "Zone 2",
    coverImage: thumb("Zone_2/FAW/DJI_0049.jpg"),
    investors: [
      {
        name: "FAW",
        images: [
          "Zone_2/FAW/DJI_0046.jpg",
          "Zone_2/FAW/DJI_0049.jpg",
          "Zone_2/FAW/DJI_0050.jpg",
          "Zone_2/FAW/DJI_0048.jpg",
        ],
      },
      {
        name: "Hella",
        images: [
          "Zone_2/Hella/DJI_0052.jpg",
          "Zone_2/Hella/DJI_0051.jpg",
          "Zone_2/Hella/DJI_0056.jpg",
        ],
      },
      {
        name: "Weidplas",
        images: [
          "Zone_2/Weidplas/DJI_0047.jpg",
        ],
      },
      {
        name: "ZakPac",
        images: [
          "Zone_2/ZakPac/DJI_0053.jpg",
          "Zone_2/ZakPac/DJI_0054.jpg",
          "Zone_2/ZakPac/DJI_0055.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-3",
    label: "Zone 3",
    coverImage: thumb("Zone_3/DJI_0079.jpg"),
    investors: [
      {
        name: "General",
        images: ["Zone_3/DJI_0079.jpg"],
      },
      {
        name: "Afrox",
        images: [
          "Zone_3/Afrox/DJI_0069.jpg",
          "Zone_3/Afrox/DJI_0077.jpg",
        ],
      },
      {
        name: "Air Products",
        images: [
          "Zone_3/Air_Products/DJI_0070.jpg",
          "Zone_3/Air_Products/DJI_0075.jpg",
          "Zone_3/Air_Products/DJI_0076.jpg",
          "Zone_3/Air_Products/DJI_0078.jpg",
        ],
      },
      {
        name: "Akacia",
        images: [
          "Zone_3/Akacia/DJI_0083.jpg",
          "Zone_3/Akacia/DJI_0084.jpg",
        ],
      },
      {
        name: "Cape Concentrates",
        images: [
          "Zone_3/Cape_Concentrates/DJI_0071.jpg",
          "Zone_3/Cape_Concentrates/DJI_0074.jpg",
        ],
      },
      {
        name: "Coega Dairy",
        images: [
          "Zone_3/Coega_Dairy/DJI_0072.jpg",
          "Zone_3/Coega_Dairy/DJI_0073.jpg",
          "Zone_3/Coega_Dairy/DJI_0080.jpg",
          "Zone_3/Coega_Dairy/DJI_0081.jpg",
          "Zone_3/Coega_Dairy/DJI_0082.jpg",
        ],
      },
      {
        name: "Corromaster",
        images: [
          "Zone_3/Corromaster/DJI_0087.jpg",
          "Zone_3/Corromaster/DJI_0094.jpg",
          "Zone_3/Corromaster/DJI_0095.jpg",
        ],
      },
      {
        name: "DCD",
        images: [
          "Zone_3/DCD/DJI_0096.jpg",
          "Zone_3/DCD/DJI_0097.jpg",
        ],
      },
      {
        name: "Dynamic Commodities",
        images: [
          "Zone_3/Dynamic_Commodities/DJI_0066.jpg",
          "Zone_3/Dynamic_Commodities/DJI_0067.jpg",
        ],
      },
      {
        name: "EC Biomass",
        images: ["Zone_3/EC_Biomass/DJI_0088.jpg"],
      },
      {
        name: "Health Cann",
        images: ["Zone_3/Health_Cann/DJI_0098.jpg"],
      },
      {
        name: "MM Engineering",
        images: [
          "Zone_3/MM_Engineering/DJI_0092.jpg",
          "Zone_3/MM_Engineering/DJI_0093.jpg",
          "Zone_3/MM_Engineering/DJI_0099.jpg",
          "Zone_3/MM_Engineering/DJI_0100.jpg",
          "Zone_3/MM_Engineering/DJI_0101.jpg",
        ],
      },
      {
        name: "Multi User",
        images: [
          "Zone_3/Multi_User/DJI_0085.jpg",
          "Zone_3/Multi_User/DJI_0086.jpg",
          "Zone_3/Multi_User/DJI_0089.jpg",
          "Zone_3/Multi_User/DJI_0090.jpg",
          "Zone_3/Multi_User/DJI_0091.jpg",
        ],
      },
      {
        name: "Powerway",
        images: ["Zone_3/Powerway/DJI_0068.jpg"],
      },
    ],
  },

  {
    id: "zone-4",
    label: "Zone 4",
    coverImage: thumb("Zone_4/BPO/DJI_0063.jpg"),
    investors: [
      {
        name: "BPO",
        images: [
          "Zone_4/BPO/DJI_0063.jpg",
          "Zone_4/BPO/DJI_0064.jpg",
          "Zone_4/BPO/DJI_0065.jpg",
        ],
      },
      {
        name: "RIC",
        images: [
          "Zone_4/RIC/DJI_0060.jpg",
          "Zone_4/RIC/DJI_0061.jpg",
          "Zone_4/RIC/DJI_0062.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-5",
    label: "Zone 5",
    coverImage: thumb("Zone_5/Cemza/DJI_0102.jpg"),
    investors: [
      {
        name: "Cemza",
        images: [
          "Zone_5/Cemza/DJI_0102.jpg",
          "Zone_5/Cemza/DJI_0103.jpg",
          "Zone_5/Cemza/DJI_0104.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-6-11",
    label: "Zone 6 & 11",
    coverImage: thumb("Zone_6_11/Agni_Steel/DJI_0109.jpg"),
    investors: [
      {
        name: "Agni Steel",
        images: [
          "Zone_6_11/Agni_Steel/DJI_0109.jpg",
          "Zone_6_11/Agni_Steel/DJI_0110.jpg",
          "Zone_6_11/Agni_Steel/DJI_0111.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-7",
    label: "Zone 7",
    coverImage: thumb("Zone_7/Cerebos/DJI_0112.jpg"),
    investors: [
      {
        name: "Cerebos",
        images: [
          "Zone_7/Cerebos/DJI_0112.jpg",
          "Zone_7/Cerebos/DJI_0113.jpg",
          "Zone_7/Cerebos/DJI_0116.jpg",
          "Zone_7/Cerebos/DJI_0117.jpg",
          "Zone_7/Cerebos/DJI_0118.jpg",
          "Zone_7/Cerebos/DJI_0119.jpg",
          "Zone_7/Cerebos/DJI_0120.jpg",
        ],
      },
      {
        name: "Lension",
        images: [
          "Zone_7/Lension/DJI_0114.jpg",
          "Zone_7/Lension/DJI_0115.jpg",
        ],
      },
    ],
  },

  {
    id: "zone-13",
    label: "Zone 13",
    coverImage: thumb("Zone_13/Dedisa/DJI_0105.jpg"),
    investors: [
      {
        name: "Dedisa",
        images: [
          "Zone_13/Dedisa/DJI_0105.jpg",
          "Zone_13/Dedisa/DJI_0106.jpg",
          "Zone_13/Dedisa/DJI_0107.jpg",
          "Zone_13/Dedisa/DJI_0108.jpg",
        ],
      },
    ],
  },
];

// ─── HELPER: resolve image paths to thumb/full URLs ──────────────────────────
// Call this when building image arrays for the lightbox.
// Each image in investors[].images is stored as a path string.
// Use thumb(path) for grid display, full(path) for lightbox.
