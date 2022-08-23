import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { userFormData } from "../constant/business";

function UserDetailsForm({ handleChange, values }) {
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
}
export default UserDetailsForm;
