import {
  business,
  logo,
  cbcData,
  cbcHeader,
  stampData,
  notesData,
} from "../../constant/business";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";

function cbcReport({ filename, patient, reportDate }) {
  const tableData = [];
  let count = 1;
  for (let i in cbcData) {
    let tr = [
      `${count}`,
      `${cbcData[i].investigation}`,
      `${cbcData[i].observedValue}`,
      `${cbcData[i].unit}`,
      `${cbcData[i].minValue}-${cbcData[i].maxValue}`,
    ];
    tableData.push(tr);
    count += 1;
  }
  var props = {
    outputType: OutputType.DataUrlNewWindow,
    returnJsPDFDocObject: true,
    fileName: `${filename}`,
    orientationLandscape: false,
    compress: true,
    logo: logo,
    stamp: stampData,
    business: {
      name: `${business.name}`,
      address: `${business.address}`,
      phone: `${business.phone}`,
      email: `${business.email}`,
      email_1: `${business.email_1}`,
      website: `${business.website}`,
    },
    contact: {
      label: "Report issued for:",
      name: `${patient.name}`,
      address: `${patient.address}`,
      phone: `${patient.phone}`,
      email: `${patient.email}`,
      otherInfo: `${patient.otherInfo}`,
    },
    invoice: {
      label: "Report: ",
      num: 19,
      invDate: `Report Date: ${reportDate}`,
      invGenDate: `Report Generated Date: ${new Date()}`,
      headerBorder: false,
      tableBodyBorder: false,
      header: cbcHeader,
      table: tableData,
      ...notesData,
    },
    footer: {
      text: "Not applicable for medical purpose.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props);
}

export default cbcReport;