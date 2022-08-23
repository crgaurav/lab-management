import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { cbcData, userFormData } from "./constant/business";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cbcReport from "./helpers/reports/cbc";
import formatedDate from "./helpers/formatedDate";
function App() {
  const [values, setValues] = React.useState({
    cbcParams: {},
    patient: {},
  });
  const userForm = () => {
    return userFormData.map((userParam) => {
      return (
        <FormControl
          key={userParam.varName}
          fullWidth
          sx={{ m: 1, boxShadow: 1, width: "35%" }}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            {userParam.name}
          </InputLabel>
          <OutlinedInput
            id={userParam.varName}
            value={values.patient[userParam.varName]}
            onChange={handleChange({
              entity: "patient",
              varName: userParam.varName,
            })}
            label={userParam.name}
          />
        </FormControl>
      );
    });
  };
  const CbcForm = () => {
    return cbcData.map((cbcParam) => {
      return (
        <FormControl
          key={cbcParam.varName}
          fullWidth
          sx={{ m: 1, boxShadow: 1, width: "35%" }}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            {cbcParam.investigation}
          </InputLabel>
          <OutlinedInput
            id={cbcParam.varName}
            value={values.cbcParams[cbcParam.varName]}
            onChange={handleChange({
              entity: "cbcParams",
              varName: cbcParam.varName,
            })}
            label={cbcParam.investigation}
            endAdornment={
              <InputAdornment position="end">{cbcParam.unit}</InputAdornment>
            }
          />
        </FormControl>
      );
    });
  };
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
      console.log(values);
    };

  return (
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
      <Card variant="outlined">
        <Typography variant="h5" component="div">
          User Details
        </Typography>
        {userForm()}
      </Card>
      <Card variant="outlined">
        <Typography variant="h5" component="div">
          CBC Details
        </Typography>
        {CbcForm()}
      </Card>
      <Button
        onClick={() => {
          cbcReport({
            filename: `${values.patient.name}-${Date.now()}.pdf`,
            patient: values.patient,
            reportDate: formatedDate,
            cbcValue: values.cbcParams,
          });
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
