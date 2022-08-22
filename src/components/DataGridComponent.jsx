import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridComponent(props) {
  const [employeeList, setEmployeeList] = useState([]);
  setEmployeeList(props.employeeList);
  const columns = [
    { field: "employeeCode", headerName: "Employee #", width: 90 },
    {
      field: "firstName",
      headerName: "First Name(s)",
      width: 150,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      editable: false,
    },
    {
      field: "salutation",
      headerName: "Salutation",
      width: 110,
      editable: false,
    },
    {
      field: "profileColor",
      headerName: "Profile Color",
      width: 110,
      editable: false,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={employeeList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
