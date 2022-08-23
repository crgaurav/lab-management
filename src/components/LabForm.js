import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

function LabForm({ handleChange, values, data: cbcData }) {
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
}
export default LabForm;
