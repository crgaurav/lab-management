import "./App.css";
import cbcReport from "./helpers/reports/cbc";
function App() {
  const filename = "gaurav.pdf";
  const patient = {
    name: `Gaurav Sharma`,
    address: `Gaurav Bhawan, Ganesh Colony, Lalsot`,
    phone: `+91 9680551550`,
    email: `gaurav6421@gmail.com`,
    otherInfo: `other sample info`,
  };
  return (
    <div className="App">
      <h1>this is test heading</h1>
      <button
        onClick={() => cbcReport({ filename, patient, reportDate: "15/15/20" })}
      >
        click here
      </button>
    </div>
  );
}

export default App;
