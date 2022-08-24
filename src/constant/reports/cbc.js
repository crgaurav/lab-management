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
    investigation: "Hemoglobin",
    unit: "gm/dl",
    minValue: 12.5,
    maxValue: 16,
    varName: "hemoglobin",
  },
  {
    investigation: "Erythrocytes(RBC) count",
    unit: "mill/cu.mm",
    minValue: 4.2,
    maxValue: 5.4,
    varName: "rbc",
  },
  {
    investigation: "PCV (Package Cell Volume)",
    unit: "%",
    minValue: 37,
    maxValue: 47,
    varName: "pcv",
  },
  {
    investigation: "MCV (Mean Corpuscular Volume)",
    unit: "fL",
    minValue: 78,
    maxValue: 100,
    varName: "mcv",
  },
  {
    investigation: "MCH (Mean Corpuscular Hb)",
    unit: "pg",
    minValue: 27,
    maxValue: 31,
    varName: "mch",
  },
  {
    investigation: "MCHC (Mean Corpuscular Hb Concen)",
    unit: "g/dL",
    minValue: 32,
    maxValue: 36,
    varName: "mchc",
  },
  {
    investigation: "RDW (Red Cell Distribution Width)",
    unit: "%",
    minValue: 11.5,
    maxValue: 14,
    varName: "rdw",
  },
  {
    investigation: "Total Leukocyte(WBC) Count",
    unit: "cells/cu.mm",
    minValue: 4000,
    maxValue: 10500,
    varName: "wbc",
  },

  {
    investigation: "Absolute Neutrophil Count",
    unit: "c.mm",
    minValue: 2000,
    maxValue: 7000,
    varName: "absoluteNeutrophilCount",
  },
  {
    investigation: "Absolute Lymphocyte Count",
    unit: "c.mm",
    minValue: 1000,
    maxValue: 3000,
    varName: "absoluteLymphocyteCount",
  },

  {
    investigation: "Absolute Monocyte Count",
    unit: "c.mm",
    minValue: 200,
    maxValue: 1000,
    varName: "absoluteMonocyteCount",
  },
  {
    investigation: "Absolute Eosinophil Count",
    unit: "c.mm",
    minValue: 20,
    maxValue: 500,
    varName: "absoluteEosinophilCount",
  },
  //
  {
    investigation: "Absolute Basophil Count",
    unit: "c.mm",
    minValue: 20,
    maxValue: 100,
    varName: "absoluteBasophilCount",
  },
  {
    investigation: "Neutrophil",
    unit: "%",
    minValue: 40,
    maxValue: 80,
    varName: "neutrophil",
  },
  {
    investigation: "Lymphocyte",
    unit: "%",
    minValue: 20,
    maxValue: 40,
    varName: "lymphocyte",
  },

  {
    investigation: "Monocyte",
    unit: "%",
    minValue: 2,
    maxValue: 10,
    varName: "monocyte",
  },
  {
    investigation: "Eosinophil",
    unit: "%",
    minValue: 1,
    maxValue: 6,
    varName: "eosinophil",
  },
  {
    investigation: "Basophil",
    unit: "%",
    minValue: 0,
    maxValue: 2,
    varName: "basophil",
  },

  {
    investigation: "Platelet Count",
    unit: "10^3/µl",
    minValue: 150,
    maxValue: 450,
    varName: "plateletCount",
  },

  {
    investigation: "MPV (Mean Platelet Volume)",
    unit: "fL",
    minValue: 6,
    maxValue: 9.5,
    varName: "mpv",
  },
  {
    investigation: "PDW (Platelet Distribution Width)",
    unit: "%",
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
