import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import reportGen from "../helpers/reports/reportGen";
import formatedDate from "../helpers/formatedDate";
import LabForm from "../components/LabForm";
import UserDetailsForm from "../components/UserDetailsForm";
import { crpHeader, crpData, notesDataCrp } from "../constant/reports/crp";
function EsrPage() {
  const [values, setValues] = React.useState({
    cbcParams: {},
    patient: {},
  });
  const handleChange =
    ({ entity, varName }) =>
    (event) => {
      if (entity === "patient") {
        let patient = {};
        patient = values.patient;
        patient[varName] = event.target.value;
        setValues({ ...values, patient });
      }
      if (entity === "cbcParams") {
        let cbcParams = {};
        cbcParams = values.cbcParams;
        cbcParams[varName] = event.target.value;
        setValues({ ...values, cbcParams });
      }
    };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "80%",
            // height: 128,
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          ESR - Report
        </Typography>
        <Card variant="outlined">
          <Typography variant="h5" component="div">
            User Details
          </Typography>
          <UserDetailsForm values={values} handleChange={handleChange} />
        </Card>
        <Card variant="outlined">
          <Typography variant="h5" component="div">
            CRP Details
          </Typography>
          <LabForm values={values} handleChange={handleChange} data={crpData} />
        </Card>
        <Button
          onClick={() => {
            reportGen({
              filename: `${values.patient.name}-${Date.now()}.pdf`,
              patient: values.patient,
              reportDate: formatedDate,
              values: values.cbcParams,
              data: crpData,
              header: crpHeader,
              notes: notesDataCrp,
            });
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default EsrPage;
