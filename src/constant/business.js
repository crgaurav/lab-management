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
      width: 50,
    },
  },
  {
    title: "Observed Value",
    //   style: {
    //     width: 10,
    //   },
  },
  {
    title: "unit",
  },
  { title: "Biological Referal Intervel" },
];
export const cbcData = [
  {
    investigation: "Hemoglobin",
    observedValue: "12.5",
    unit: "gm/dl",
    minValue: 12.5,
    maxValue: 16,
  },
  {
    investigation: "Erythrocytes(RBC) count",
    observedValue: "4.05",
    unit: "mill/cu.mm",
    minValue: 4.2,
    maxValue: 5.4,
  },
  {
    investigation: "PCV (Package Cell Volume)",
    observedValue: "36.8",
    unit: "%",
    minValue: 37,
    maxValue: 47,
  },
  {
    investigation: "MCV (Mean Corpuscular Volume)",
    observedValue: "90.9",
    unit: "fL",
    minValue: 78,
    maxValue: 100,
  },
  {
    investigation: "MCH (Mean Corpuscular Hb)",
    observedValue: "30.9",
    unit: "pg",
    minValue: 27,
    maxValue: 31,
  },
  {
    investigation: "MCHC (Mean Corpuscular Hb Concen)",
    observedValue: "34.0",
    unit: "g/dL",
    minValue: 32,
    maxValue: 36,
  },
  {
    investigation: "RDW (Red Cell Distribution Width)",
    observedValue: "12.8",
    unit: "%",
    minValue: 11.5,
    maxValue: 14,
  },
  {
    investigation: "Total Leukocyte(WBC) Count",
    observedValue: "7100",
    unit: "cells/cu.mm",
    minValue: 4000,
    maxValue: 10500,
  },

  {
    investigation: "Absolute Neutrophil Count",
    observedValue: "4890",
    unit: "c.mm",
    minValue: 2000,
    maxValue: 7000,
  },
  {
    investigation: "Absolute Lymphocyte Count",
    observedValue: "1775",
    unit: "c.mm",
    minValue: 1000,
    maxValue: 3000,
  },

  {
    investigation: "Absolute Monocyte Count",
    observedValue: "213",
    unit: "c.mm",
    minValue: 200,
    maxValue: 1000,
  },
  {
    investigation: "Absolute Eosinophil Count",
    observedValue: "213",
    unit: "c.mm",
    minValue: 20,
    maxValue: 500,
  },
  //
  {
    investigation: "Absolute Basophil Count",
    observedValue: "0",
    unit: "c.mm",
    minValue: 20,
    maxValue: 100,
  },
  {
    investigation: "Neutrophil",
    observedValue: "69",
    unit: "%",
    minValue: 40,
    maxValue: 80,
  },
  {
    investigation: "Lymphocyte",
    observedValue: "25",
    unit: "%",
    minValue: 20,
    maxValue: 40,
  },

  {
    investigation: "Monocyte",
    observedValue: "3",
    unit: "%",
    minValue: 2,
    maxValue: 10,
  },
  {
    investigation: "Eosinophil",
    observedValue: "3",
    unit: "%",
    minValue: 1,
    maxValue: 6,
  },
  {
    investigation: "Basophil",
    observedValue: "0",
    unit: "%",
    minValue: 0,
    maxValue: 2,
  },

  {
    investigation: "Platelet Count",
    observedValue: "248",
    unit: "10^3/µl",
    minValue: 150,
    maxValue: 450,
  },

  {
    investigation: "MPV (Mean Platelet Volume)",
    observedValue: "11.1",
    unit: "fL",
    minValue: 6,
    maxValue: 9.5,
  },
  {
    investigation: "PDW (Platelet Distribution Width)",
    observedValue: "14.1",
    unit: "%",
    minValue: 9,
    maxValue: 17,
  },
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
