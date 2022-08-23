import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";

export default function EmployeeFormComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [profileColor, setProfileColor] = useState("");
  const [grossSalary, setGrossSalary] = useState(0);
  const [employeeCode, setEmployeeCode] = useState(0);
  const [salutation, setSalutation] = useState("");

  const handleChange = (value, callback) => {
    callback(value.target.value);
  };

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      salutation: salutation,
      gender: gender,
      employeeCode: parseInt(employeeCode),
      grossSalary: parseInt(grossSalary),
      profileColor: profileColor,
    };
    if (props.selectedEmployee && props.selectedEmployee.id)
      data.id = props.selectedEmployee.id;
    console.log(data);
  };

  const handleSalutation = (value) => {
    setSalutation(value.target.value);
    switch (value.target.value) {
      case "MR":
        setGender("MALE");
        break;
      case "MS":
        setGender("FEMALE");
        break;
      case "MRS":
        setGender("FEMALE");
        break;
      case "MX":
        setGender("UNSPECIFIED");
        break;
      default:
        break;
    }
  };

  const handleGrossSalary = (value) => {
    setGrossSalary(value.value);
  };

  const resetValues = () => {
    setFirstName("");
    setLastName("");
    setGender("");
    setProfileColor("");
    setGrossSalary(0);
    setEmployeeCode(0);
    setSalutation("");
  };

  const setEmployeeFieldValues = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setGender(data.gender);
    setProfileColor(data.profileColor);
    setGrossSalary(data.grossSalary);
    setEmployeeCode(data.employeeCode);
    setSalutation(data.salutation);
  };

  useEffect(() => {
    if (props.selectedEmployee && props.selectedEmployee.id)
      setEmployeeFieldValues(props.selectedEmployee);
  }, [props.formOpen, props.selectedEmployee]);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={props.formOpen}
      disableEscapeKeyDown
      onClose={(reason) => {
        if (reason) return;
        else {
          props.handleFormClose();
        }
      }}
    >
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Employee Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              value={firstName}
              name="firstName"
              label="First name(s)"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(value) => handleChange(value, setFirstName)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              variant="standard"
              value={`${firstName} ${lastName}`}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              value={lastName}
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(value) => handleChange(value, setLastName)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberFormat
              required
              id="grossSalary"
              value={grossSalary}
              name="grossSalary"
              label="Gross Salary $PY"
              fullWidth
              variant="standard"
              customInput={TextField}
              type="text"
              thousandSeparator={" "}
              onValueChange={(value) => handleGrossSalary(value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Salutation
              </InputLabel>
              <NativeSelect
                onChange={(value) => handleSalutation(value)}
                inputProps={{
                  name: "salutation",
                  id: "uncontrolled-native",
                }}
                value={salutation}
              >
                <option value="DR">Dr</option>
                <option value="MR">Mr</option>
                <option value="MS">Ms</option>
                <option value="MRS">Mrs</option>
                <option value="MX">Mx</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={profileColor}
              id="profileColor"
              name="profileColor"
              label="Employee Profile Color"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(value) => handleChange(value, setProfileColor)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender"
                name="controlled-radio-buttons-group"
                value={gender}
                row
                onChange={(value) => setGender(value.target.value)}
              >
                <FormControlLabel
                  value="MALE"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="FEMALE"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="UNSPECIFIED"
                  control={<Radio />}
                  label="Unspecified"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="employeeCode"
              name="employeeCode"
              label="Employee #"
              fullWidth
              value={employeeCode}
              autoComplete="family-name"
              variant="standard"
              onChange={(value) => handleChange(value, setEmployeeCode)}
            />
          </Grid>
          <Grid container spacing={2} item style={{ marginLeft: "auto" }}>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Save Employee">
                <IconButton
                  style={{
                    borderRadius: "10px",
                    width: "10%",
                    padding: 2,
                    margin: 5,
                    backgroundColor: "#1d548b",
                  }}
                  onClick={() => handleSubmit()}
                >
                  <CheckIcon style={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel">
                <IconButton
                  style={{
                    borderRadius: "10px",
                    width: "10%",
                    padding: 2,
                    backgroundColor: "#cf0000",
                  }}
                  onClick={() => {
                    props.handleFormClose();
                    props.resetValues();
                    resetValues();
                  }}
                >
                  <CloseIcon style={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
