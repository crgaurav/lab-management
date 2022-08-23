export const business = {
  name: "Sharma Dia Center",
  address: "Bus-Stand, Bagri, Lalsot, Dausa, Rajasthan",
  phone: "+91 9414626421",
  email: "gaurav6421@gmail.com",
  email_1: "gr8soru143@gmail.com",
  website: "https://learning-ocean.com",
};
export const logo = {
  src: "http://localhost:3000/logo192.png",
  type: "PNG", //optional, when src= data:uri (nodejs case)
  width: 26.66, //aspect ratio = width/height
  height: 26.66,
  margin: {
    top: 0, //negative or positive num, from the current position
    left: 0, //negative or positive num, from the current position
  },
};

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

export const userFormData = [
  { name: `Name`, varName: "name", type: "text" },
  { name: `Address`, varName: "address", type: "text" },
  { name: `Phone Number`, varName: "phone", type: "text" },
  { name: `emailId`, varName: "email", type: "email" },
  { name: `Other Info`, varName: "otherInfo", type: "text" },
];

export const stampData = {
  inAllPages: true, //by default = false, just in the last page
  src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
  type: "JPG", //optional, when src= data:uri (nodejs case)
  width: 20, //aspect ratio = width/height
  height: 20,
  margin: {
    top: 0, //negative or positive num, from the current position
    left: 0, //negative or positive num, from the current position
  },
};

export const notesData = {
  invDescLabel: "Note",
  invDesc:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
};
