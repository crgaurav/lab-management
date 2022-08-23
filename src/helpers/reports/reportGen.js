import { business, logo, stampData } from "../../constant/business";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import formatedDate from "../formatedDate";
function reportGen({
  filename,
  patient,
  reportDate,
  data,
  header,
  values,
  notes,
}) {
  const tableData = [];
  let count = 1;
  for (let i in data) {
    let tr = [
      `${count}`,
      `${data[i].investigation}`,
      `${values[data[i].varName]}`,
      `${data[i].unit}`,
      `${data[i].minValue}-${data[i].maxValue}`,
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
      invDate: `Sample Date: ${reportDate}`,
      invGenDate: `Report Generated Date: ${formatedDate}`,
      headerBorder: false,
      tableBodyBorder: false,
      header,
      table: tableData,
      ...notes,
    },
    footer: {
      text: "Not applicable for medical purpose.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props);
}

export default reportGen;
