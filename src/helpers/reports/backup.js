import { business, logo } from "./constant/business";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";

function cbcReport({ filename, patient, reportDate }) {
  var props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: `${filename}`,
    orientationLandscape: false,
    compress: true,
    logo: logo,
    stamp: {
      inAllPages: true, //by default = false, just in the last page
      // src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
      type: "JPG", //optional, when src= data:uri (nodejs case)
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
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
      header: [
        {
          title: "#",
          style: {
            width: 10,
          },
        },
        {
          title: "Investigation",
          style: {
            width: 30,
          },
        },
        {
          title: "Observed Value",
          style: {
            width: 80,
          },
        },
        { title: "Biological Referal Intervel" },
      ],
      table: Array.from(Array(10), (item, index) => [
        index + 1,
        "There are many variations ",
        "Lorem Ipsum is simply dummy text dummy text ",
        200.5,
        4.5,
        "m2",
        400.5,
      ]),
      additionalRows: [
        {
          col1: "Total:",
          col2: "145,250.50",
          col3: "ALL",
          style: {
            fontSize: 14, //optional, default 12
          },
        },
        {
          col1: "VAT:",
          col2: "20",
          col3: "%",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
        {
          col1: "SubTotal:",
          col2: "116,199.90",
          col3: "ALL",
          style: {
            fontSize: 10, //optional, default 12
          },
        },
      ],
      invDescLabel: "Invoice Note",
      invDesc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };
  // const pdfObject = jsPDFInvoiceTemplate(props); //returns number of pages created

  //or in browser
  const pdfObject = jsPDFInvoiceTemplate(props);
}

export default cbcReport;
