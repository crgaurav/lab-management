export const cbcHeader = [
  {
    title: "#",
    style: {
      width: 10,
    },
  },
  {
    title: "Investigation",
    style: {
      width: 60,
    },
  },
  {
    title: "Observed Value",
    style: {
      width: 40,
    },
  },
  {
    title: "unit",
    style: {
      width: 20,
    },
  },
  {
    title: "Biological Referal Intervel",
    style: {
      width: 40,
    },
  },
];
export const cbcData = [
  {
    investigation: "WBC",
    unit: "10^9/L",
    minValue: 3.5,
    maxValue: 10.0,
    varName: "wbc",
  },
  {
    investigation: "LYM",
    unit: "%",
    minValue: 20,
    maxValue: 40,
    varName: "lym",
  },
  {
    investigation: "MID",
    unit: "%",
    minValue: 1,
    maxValue: 15,
    varName: "mid",
  },
  {
    investigation: "GRAN",
    unit: "%",
    minValue: 50,
    maxValue: 70,
    varName: "gran",
  },
  {
    investigation: "LYM#",
    unit: "10^9/L",
    minValue: 0.6,
    maxValue: 4.1,
    varName: "lymh",
  },
  {
    investigation: "MID#",
    unit: "10^9/L",
    minValue: 0.1,
    maxValue: 1.8,
    varName: "midh",
  },
  {
    investigation: "GRAN#",
    unit: "10^9/L",
    minValue: 2.0,
    maxValue: 7.8,
    varName: "granh",
  },
  {
    investigation: "RBC",
    unit: "10^12/L",
    minValue: 3.5,
    maxValue: 6.0,
    varName: "rbc",
  },
  {
    investigation: "HGB",
    unit: "g/dl",
    minValue: 11.0,
    maxValue: 17.5,
    varName: "hemoglobin",
  },
  {
    investigation: "HCT",
    unit: "%",
    minValue: 35.0,
    maxValue: 54.5,
    varName: "hct",
  },
  {
    investigation: "MCV",
    unit: "fL",
    minValue: 80,
    maxValue: 100,
    varName: "mcv",
  },
  {
    investigation: "MCH",
    unit: "pg",
    minValue: 26,
    maxValue: 34,
    varName: "mch",
  },
  {
    investigation: "MCHC",
    unit: "g/dL",
    minValue: 31.5,
    maxValue: 36,
    varName: "mchc",
  },
  {
    investigation: "RDW_CV",
    unit: "%",
    minValue: 11,
    maxValue: 16,
    varName: "rdw",
  },
  {
    investigation: "RDW_SD",
    unit: "fL",
    minValue: 35,
    maxValue: 56,
    varName: "rdwsd",
  },
  {
    investigation: "Plt",
    unit: "10^9/L",
    minValue: 100,
    maxValue: 350,
    varName: "plateletCount",
  },
  {
    investigation: "PCV (Package Cell Volume)",
    unit: "%",
    minValue: 37,
    maxValue: 47,
    varName: "pcv",
  },
  {
    investigation: "Platelet Count",
    unit: "10^3/µl",
    minValue: 150,
    maxValue: 450,
    varName: "plateletCount",
  },
  {
    investigation: "MPV",
    unit: "fL",
    minValue: 6.5,
    maxValue: 12,
    varName: "mpv",
  },
  {
    investigation: "PCT",
    unit: "%",
    minValue: 0.1,
    maxValue: 0.28,
    varName: "pct",
  },
  {
    investigation: "P_LCR",
    unit: "%",
    minValue: 11,
    maxValue: 45,
    varName: "plcr",
  },
  {
    investigation: "P_LCC",
    unit: "10^9/L",
    minValue: 11,
    maxValue: 135,
    varName: "plcc",
  },
  {
    investigation: "PDW",
    unit: "fl",
    minValue: 9,
    maxValue: 17,
    varName: "pdw",
  },
];

export const notesDataCbc = {
  invDescLabel: "Comment",
  invDesc:
    "As per the recommendation of International council for Standardization in Hematology, the differential leucocyte counts are additionally being reported as absolute numbers of each cell in per unit volume of blood. Test conducted on EDTA whole blood.",
};
