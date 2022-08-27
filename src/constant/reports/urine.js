export const urineHeader = [
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
export const urineData = [
  {
    investigation: "WCB",
    unit: "cells/ul",
    minValue: "125ca",
    varName: "cells/uL",
  },
  {
    investigation: "NIT",
    unit: "",
    minValue: "Negative",

    varName: "nit",
    defaultValue: "Negative",
  },
  {
    investigation: "URO",
    unit: "umol/L",
    minValue: 3.2,

    varName: "uro",
  },
  {
    investigation: "PRO",
    unit: "g/L",
    minValue: "Negative",

    varName: "pro",
    defaultValue: "Negative",
  },
  {
    investigation: "pH",
    unit: "",
    minValue: 6.0,

    varName: "ph",
  },

  {
    investigation: "BLD",
    unit: "cells/uL",
    minValue: "10 ca",

    varName: "bld",
  },
  {
    investigation: "SG",
    unit: "",
    minValue: 1.03,

    varName: "sg",
  },
  {
    investigation: "KET",
    unit: "mmol/L",
    minValue: 1.5,

    varName: "ket",
  },
  {
    investigation: "BIL",
    unit: "mmol/L",
    minValue: "Negative",

    varName: "bil",
    defaultValue: "Negative",
  },
  {
    investigation: "GLU",
    unit: "mmol/L",
    minValue: "Negative",

    varName: "glu",
    defaultValue: "Negative",
  },
];

export const notesDataUrine = {
  invDescLabel: "Note",
  invDesc: "",
};
