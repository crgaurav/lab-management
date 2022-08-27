import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CbcPage from "./pages/CbcPage";
import EsrPage from "./pages/EsrPage";
import CrpPage from "./pages/CrpPage";
import LiverProfilePage from "./pages/LiverProfilePage";
import BilirubinPage from "./pages/BilirubinPage";
import SgotPage from "./pages/SgotPage";
import SgptPage from "./pages/SgptPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App" style={{ marginLeft: "15%" }}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="cbc" element={<CbcPage />} />
          <Route path="esr" element={<EsrPage />} />
          <Route path="crp" element={<CrpPage />} />
          <Route path="liver" element={<LiverProfilePage />} />
          <Route path="sgpt" element={<SgptPage />} />
          <Route path="sgot" element={<SgotPage />} />
          <Route path="billirubin" element={<BilirubinPage />} />
        </Routes>
        <Link to="/">Home</Link>
        <br />
        <Link to="cbc">CBC</Link>
        <br />
        <Link to="esr">ESR</Link>
        <br />
        <Link to="crp">CRP</Link>
        <br />
        <Link to="sgot">SGOT</Link>
        <br />
        <Link to="sgpt">SGPT</Link>
        <br />
        <Link to="billirubin">Billirubin</Link>
        <br />
        <Link to="liver">LiverProfile</Link>
      </div>
    </>
  );
}

export default App;
