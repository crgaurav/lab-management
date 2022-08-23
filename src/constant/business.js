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

export const notesDataCbc = {
  invDescLabel: "Note",
  invDesc:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
};
